import json
import asyncio
import aiohttp

HEADERS = {
    "User-Agent": "ThaiPuzzleWordbankBot/1.0 (contact: sakulbuth@gmail.com)"
}

async def fetch_subcats(session, parent_category, semaphore):
    url = "https://th.wikipedia.org/w/api.php"
    full_cat_name = f"หมวดหมู่:{parent_category}" if not parent_category.startswith("หมวดหมู่:") else parent_category

    params = {
        "action": "query",
        "list": "categorymembers",
        "cmtitle": full_cat_name,
        "cmtype": "subcat",
        "cmlimit": "500",
        "format": "json"
    }

    async with semaphore:
        try:
            async with session.get(url, params=params, headers=HEADERS) as response:
                response.raise_for_status()
                data = await response.json()
                return data.get("query", {}).get("categorymembers", [])
        except Exception as e:
            print(f"Error mining {parent_category}: {e}")
            return []

async def mine_subcategories(session, parent_category, max_depth, current_depth, semaphore):
    if current_depth > max_depth:
        return []

    found_categories = []
    subcats = await fetch_subcats(session, parent_category, semaphore)

    skip_keywords = ["บทความ", "วิกิพีเดีย", "โครง", "แม่แบบ", "ลบ", "ภาพ", "ไฟล์", "ผ่านการตรวจสอบ", "CS1", "Webarchive", "ผู้ใช้"]

    valid_titles = []
    for cat in subcats:
        title = cat.get("title", "").replace("หมวดหมู่:", "")
        if any(kw in title for kw in skip_keywords):
            continue
        valid_titles.append(title)
        found_categories.append(title)

    if current_depth < max_depth:
        tasks = [mine_subcategories(session, title, max_depth, current_depth + 1, semaphore) for title in valid_titles]
        results = await asyncio.gather(*tasks)
        for deeper_cats in results:
            found_categories.extend(deeper_cats)

    return list(set(found_categories))

async def main():
    root_target = "วัฒนธรรมไทย"
    print(f"Mining subcategories under '{root_target}' using custom headers...")

    # Use a semaphore to limit concurrent requests (Wikipedia recommends ~50-100 max for unauthenticated, we'll use 20 for safety)
    semaphore = asyncio.Semaphore(20)

    timeout = aiohttp.ClientTimeout(total=30)
    async with aiohttp.ClientSession(timeout=timeout) as session:
        all_found_cats = await mine_subcategories(session, root_target, 2, 1, semaphore)

    print(f"\nSuccess! Found {len(all_found_cats)} potential puzzle categories.")
    print("\nSample of discovered categories:")
    for cat in sorted(all_found_cats)[:30]:
        print(f"- หมวดหมู่:{cat}")

    output_file = "discovered_categories.txt"
    with open(output_file, "w", encoding="utf-8") as f:
        for cat in sorted(all_found_cats):
            f.write(f"{cat}\n")
            
    print(f"\nFull list saved to: {output_file}")

if __name__ == "__main__":
    asyncio.run(main())
