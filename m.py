import json
import requests

# Define a global header. Wikipedia appreciates an email address so they can 
# contact you if your script accidentally floods their servers, but any unique string works.
HEADERS = {
    "User-Agent": "ThaiPuzzleWordbankBot/1.0 (contact: sakulbuth@gmail.com)"
}

def mine_subcategories(parent_category, max_depth=2, current_depth=1):
    """Recursively crawls Wikipedia to find subcategories under a parent category."""
    if current_depth > max_depth:
        return []

    url = "https://th.wikipedia.org/w/api.php"
    full_cat_name = f"หมวดหมู่:{parent_category}" if not parent_category.startswith("หมวดหมู่:") else parent_category

    params = {
        "action": "query",
        "list": "categorymembers",
        "cmtitle": full_cat_name,
        "cmtype": "subcat",  # Focus ONLY on subcategories
        "cmlimit": "500",
        "format": "json"
    }

    found_categories = []

    try:
        # HEADERS included here to prevent the 403 Forbidden Error
        response = requests.get(url, params=params, headers=HEADERS)
        response.raise_for_status()
        data = response.json()

        subcats = data.get("query", {}).get("categorymembers", [])

        for cat in subcats:
            title = cat.get("title", "").replace("หมวดหมู่:", "")

            # FILTER: Skip administrative/maintenance wiki categories
            skip_keywords = ["บทความ", "วิกิพีเดีย", "โครง", "แม่แบบ", "ลบ", "ภาพ", "ไฟล์", "ผ่านการตรวจสอบ", "CS1", "Webarchive", "ผู้ใช้"]
            if any(kw in title for kw in skip_keywords):
                continue

            found_categories.append(title)

            # Deep dive further down the tree
            deeper_cats = mine_subcategories(title, max_depth, current_depth + 1)
            found_categories.extend(deeper_cats)

    except Exception as e:
        print(f"Error mining {parent_category}: {e}")

    # Remove duplicates
    return list(set(found_categories))

if __name__ == "__main__":
    # "ประเทศไทย" (Thailand) is the best master root for puzzle keywords!
    root_target = "วัฒนธรรมไทย"
    print(f"Mining subcategories under '{root_target}' using custom headers...")

    # depth=2 keeps it fast and relevant. Increase to 3 if you want thousands of deep niche results.
    all_found_cats = mine_subcategories(root_target, max_depth=2)

    print(f"\nSuccess! Found {len(all_found_cats)} potential puzzle categories.")
    print("\nSample of discovered categories:")
    for cat in sorted(all_found_cats)[:30]:
        print(f"- หมวดหมู่:{cat}")

    # Save list to review manually
    output_file = "discovered_categories.txt"
    with open(output_file, "w", encoding="utf-8") as f:
        for cat in sorted(all_found_cats):
            f.write(f"{cat}\n")
            
    print(f"\nFull list saved to: {output_file}")