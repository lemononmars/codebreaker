import re
import json

def load_dict_ts(filepath):
    words = []
    with open(filepath, "r", encoding="utf-8") as f:
        for line in f:
            match = re.search(r'"([^"]+)"', line)
            if match:
                words.append(match.group(1))
    return words

def main():
    dict_path = "src/lib/utils/dict.ts"
    words = load_dict_ts(dict_path)
    print(f"Loaded {len(words)} words from {dict_path}")

    try:
        from pythainlp.corpus import thai_word_freq
        freq_data = dict(thai_word_freq())
        print(f"Loaded PyThaiNLP word frequency corpus ({len(freq_data)} entries)")
    except Exception as e:
        print(f"PyThaiNLP error: {e}")
        freq_data = {}

    # Rank words by frequency
    ranked_words = []
    for word in words:
        freq = freq_data.get(word, 0)
        ranked_words.append((word, freq))

    # Sort descending by frequency
    ranked_words.sort(key=lambda x: x[1], reverse=True)

    matched = sum(1 for _, f in ranked_words if f > 0)
    print(f"Words matched with frequency data: {matched} / {len(words)}")

    print("\nTop 20 Most Frequent Words:")
    for w, f in ranked_words[:20]:
        print(f"  {w}: {f}")

    # Export to dict_sorted.ts
    output_path = "src/lib/utils/dict_sorted.ts"
    with open(output_path, "w", encoding="utf-8") as f:
        f.write("export const dict = [\n")
        lines = [f'  "{w}"' for w, _ in ranked_words]
        f.write(",\n".join(lines))
        f.write("\n];\n")

    print(f"\nSaved sorted dictionary to {output_path}")

if __name__ == "__main__":
    main()
