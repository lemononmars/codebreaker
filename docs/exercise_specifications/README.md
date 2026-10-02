# Puzzle Mechanics Exercise Specifications (Draft Review)

This directory contains the new draft set of **exercise specifications** for all 94 puzzle mechanics. Each exercise is designed with clear visual descriptions (for vector SVG rendering), instructions, answer keys, and step-by-step logic explanations.

The existing SVG generation and data layer in `src/lib/data/resources/puzzleMechanicDetails.ts` remain untouched while this new set is reviewed and iterated upon.

---

## Chapter Directory & Specification Files

| Chapter | File | Mechanics Count | Highlights |
| :--- | :--- | :---: | :--- |
| **Chapter 1** | [**`chapter_1_basics.md`**](./chapter_1_basics.md) | **15** | Question mark patterns, number sequencing, directional arrows, miniature letters, dakuten sound shifts, matching glyphs, acrostics |
| **Chapter 2** | [**`chapter_2_wordplay.md`**](./chapter_2_wordplay.md) | **25** | Tanuki removals, Megane replacements, Romaji/Morse ciphers, compound fusions, palindromes, rot1 shifts, Ari-Nashi sets, hole counting |
| **Chapter 3** | [**`chapter_3_themes.md`**](./chapter_3_themes.md) | **24** | Gojuon syllabary, Zodiacs, solar calendar/planets, playing cards, music scales, analog clocks, Reiwa era, telephone keypads, 7-segments |
| **Chapter 4** | [**`chapter_4_visuals.md`**](./chapter_4_visuals.md) | **16** | Connect-the-dots, cell shading, negative space, dice opposite faces, missing jigsaw, 3D top-down perspective, loop arrows |
| **Chapter 5** | [**`chapter_5_puzzle_formats.md`**](./chapter_5_puzzle_formats.md) | **14** | Mazes, Eulerian trails, crosswords, polyominoes, anagrams, Wado-kaichin central coins, Amidakuji ghost legs, verbal cryptarithms, Lo Shu magic squares |
| **Total** | | **94** | Full coverage of the 5 taxonomy chapters |

---

## Specification Schema per Exercise

Each exercise includes:
1. **Mechanic ID & Titles**: English / Thai / Japanese
2. **Exercise Title**: Catchy title for the riddle
3. **Prompt**: Solver instruction in Thai
4. **Image Description (What the image should look like)**: Blueprint specifying frame size, layout, elements, colors, coordinates, and visual clues
5. **Solution Image Description**: Visual highlights revealing the solved state
6. **Hint**: Progressive hint
7. **Answer & Accepted Variants**: Canonical display + normalized answers
8. **Step-by-Step Explanation**: Logic deduction walkthrough in Thai
