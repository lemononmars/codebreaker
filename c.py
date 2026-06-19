import json
import os
import requests

# Wikipedia API settings
URL = "https://th.wikipedia.org/w/api.php"
HEADERS = {
    "User-Agent": "ThaiPuzzleWordbankBuilder/2.0 (contact: your_email@example.com)"
}


def get_words_from_category(category_th):
    """Fetches all article titles inside a given Thai Wikipedia category."""
    full_category_name = (
        f"หมวดหมู่:{category_th}"
        if not category_th.startswith("หมวดหมู่:")
        else category_th
    )

    params = {
        "action": "query",
        "list": "categorymembers",
        "cmtitle": full_category_name,
        "cmlimit": "500",  # Pull up to 500 items per category
        "format": "json",
        "cmtype": "page",  # Only grab actual articles/words, skip sub-categories
    }

    words = []

    try:
        response = requests.get(URL, params=params, headers=HEADERS)
        response.raise_for_status()
        data = response.json()

        members = data.get("query", {}).get("categorymembers", [])
        for member in members:
            title = member.get("title")

            # Clean out Wikipedia meta-junk if any slips through
            if title and not any(
                title.startswith(prefix)
                for prefix in ["คุยเรื่อง:", "วิกิพีเดีย:", "แม่แบบ:"]
            ):
                words.append(title)

    except Exception as e:
        print(f"  ⚠️ Error scraping '{category_th}': {e}")

    return words


def main():
    input_file = "culture.txt"
    output_file = "culture_wordbank.json"

    # Quick setup helper if you don't have the file yet
    if not os.path.exists(input_file):
        print(f"Creating a sample '{input_file}' for you...")
        with open(input_file, "w", encoding="utf-8") as f:
            f.write("Fruits,ผลไม้\n")
            f.write("Traditional Thai Desserts,ขนมไทย\n")
            f.write("Animals,สัตว์\n")

    wordbank = {"categories": []}

    print(f"Reading targets from {input_file}...")
    with open(input_file, "r", encoding="utf-8") as f:
        lines = [line.strip() for line in f if line.strip()]

    for line in lines:
        # Handle lines that have "English,Thai" or just "Thai"
        if "," in line:
            category_en, category_th = [item.strip() for item in line.split(",", 1)]
        else:
            category_th = line.strip()
            category_en = category_th  # fallback if no English translation provided

        # Strip out any unintentional "หมวดหมู่:" prefix from the txt file for consistency
        category_th_clean = category_th.replace("หมวดหมู่:", "")

        print(f"Scraping elements for: {category_th_clean} ({category_en})...")

        # Get words array from Wikipedia
        words_list = get_words_from_category(category_th_clean)

        # Build the simplified structure dictionary item
        category_dict = {
            "category_en": category_en,
            "category_th": category_th_clean,
            "words": words_list,
        }

        wordbank["categories"].append(category_dict)

    # Save the giant dictionary to JSON
    print(f"\nWriting final database to {output_file}...")
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(wordbank, f, ensure_ascii=False, indent=2)

    print("Task complete!")


if __name__ == "__main__":
    main()