# Chapter 1: Puzzle-Solving Basics (พื้นฐานการไขปริศนา)
**Total Mechanics:** 15  
**Theme Focus:** Fundamental Nazotoki patterns, question marks, sequential reading, directional cues, and extraction basics.

---

## 1. Answer the Question Mark (`answer-the-question-mark`)
- **Titles:** Answer the Question Mark | หาคำตอบแทนเครื่องหมายคำถาม | ？を答える
- **Exercise Title:** เข็มทิศตัวอักษรปริศนา (Alphabet Compass)
- **Prompt:** พิจารณาตัวอักษรบนหน้าปัดเข็มทิศทั้ง 4 ทิศ แล้วหาว่าตัวอักษรใดควรแทนที่เครื่องหมาย [ ? ] ทางทิศตะวันตก
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 dark slate (#0f172a) rounded card with silver border (#334155).
  - **Visual Elements:**
    - A circular compass dial with cardinal pointers (North, East, South, West) centered at (260, 120) with radius 85px.
    - **North node:** Blue circular badge (#1e293b, cyan border #38bdf8) with bold letter "**B**" and small subtitle "(2)".
    - **East node:** Blue circular badge with bold letter "**E**" and subtitle "(5)".
    - **South node:** Blue circular badge with bold letter "**H**" and subtitle "(8)".
    - **West node:** Glowing amber badge (#451a03, gold border #f59e0b) containing a bright bold "**?**".
    - Between North and East is a curved clockwise arrow labeled "+3".
    - Between East and South is a curved clockwise arrow labeled "+3".
- **Solution Image Description:**
  - The West node turns into an emerald green circle (#064e3b, stroke #10b981) displaying the letter "**K**" with subtitle "(11)".
  - An illuminated golden ring connects all 4 nodes, showing B &rarr; E &rarr; H &rarr; K (+3 pattern).
- **Hint:** สังเกตตัวอักษรตามลำดับเข็มนาฬิกา: B(2) &rarr; E(5) &rarr; H(8)... ระยะห่างเพิ่มขึ้นทีละเท่าไร?
- **Answer:** **K**
- **Accepted Answers:** `["K", "k", "เค", "11"]`
- **Explanation:**
  1. แปลงตัวอักษรภาษาอังกฤษเป็นลำดับตัวเลข: B = 2, E = 5, H = 8
  2. สังเกตว่าตัวอักษรเดินหน้าตามเข็มนาฬิกาทีละ +3 ลำดับ (2 + 3 = 5, 5 + 3 = 8)
  3. ดังนั้น ตำแหน่งเครื่องหมาย [ ? ] ทางทิศตะวันตก คือ 8 + 3 = 11 ซึ่งตรงกับตัวอักษร **K**

---

## 2. Read in Number Order (`read-in-number-order`)
- **Titles:** Read in Number Order | อ่านตามลำดับตัวเลข | 数字順に読む
- **Exercise Title:** ถอดรหัสหีบสมบัติ 4 กุญแจ (Treasure Chest Combination)
- **Prompt:** นำตัวอักษรบนกุญแจทั้ง 4 ดอกมาเรียงอ่านตามหมายเลขกำกับ (1 &rarr; 2 &rarr; 3 &rarr; 4) เพื่อเปิดหีบสมบัติ
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 slate container with a gold lock motif in the background.
  - **Visual Elements:**
    - 4 antique brass keys placed in random order horizontally:
      - Key A (x=80): Letter "**O**", small blue circle badge with number "**3**" on key bow.
      - Key B (x=190): Letter "**L**", small blue circle badge with number "**1**".
      - Key C (x=300): Letter "**K**", small blue circle badge with number "**4**".
      - Key D (x=410): Letter "**O**", small blue circle badge with number "**2**".
    - Below the keys is an empty password slot with 4 dashed boxes: `[_] [_] [_] [_]` with numbers 1, 2, 3, 4 underneath each box.
- **Solution Image Description:**
  - The 4 keys glow green and arrows animate them into the 4 password slots in exact sequence:
    `[L] [O] [O] [K]` (1=L, 2=O, 3=O, 4=K).
  - An open golden chest icon appears below with the text "UNLOCKED!".
- **Hint:** ค้นหาว่ากุญแจที่มีเลข 1, 2, 3, 4 คือตัวอักษรใด แล้วนำมาเรียงต่อกัน
- **Answer:** **LOOK**
- **Accepted Answers:** `["LOOK", "look", "ลุค", "ลุคก์"]`
- **Explanation:**
  1. ค้นหากุญแจหมายเลข 1 ได้อักษร **L**
  2. ค้นหากุญแจหมายเลข 2 ได้อักษร **O**
  3. ค้นหากุญแจหมายเลข 3 ได้อักษร **O**
  4. ค้นหากุญแจหมายเลข 4 ได้อักษร **K**
  5. เรียงลำดับ 1 &rarr; 2 &rarr; 3 &rarr; 4 ได้คำว่า **LOOK**

---

## 3. Follow the Arrows (`follow-the-arrows`)
- **Titles:** Follow the Arrows | อ่านตามลูกศร | 矢印を読む
- **Exercise Title:** เส้นทางเขาวงกตสายลม (Breeze Pathway)
- **Prompt:** เริ่มต้นที่ช่อง [START] แล้วเดินตามลูกศรชี้ทางไปทีละช่อง นำตัวอักษรที่เดินผ่านมารวมกันเป็นรหัสผ่าน 4 ตัวอักษร
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 dark slate card.
  - **Visual Elements:**
    - A 3x3 grid of rounded slate tiles (each 60x60px):
      - Row 1: **W** (&rarr; ชี้ขวา, START) | **I** (&darr; ชี้ล่าง) | **A** (&larr; ชี้ซ้าย)
      - Row 2: **S** (&uarr; ชี้บน) | **N** (&rarr; ชี้ขวา) | **D** (GOAL &bull; ธงทอง)
      - Row 3: **M** (&rarr; ชี้ขวา) | **T** (&uarr; ชี้บน) | **E** (&larr; ชี้ซ้าย)
    - Tile (1,1) labeled "START" with emerald border.
    - Tile (2,3) labeled "GOAL" with gold flag icon.
- **Solution Image Description:**
  - A bright glowing teal line connects: W &rarr; I &rarr; N &rarr; D.
  - Irrelevant tiles are dimmed to 20% opacity.
  - At the bottom, letters are highlighted: W + I + N + D = **WIND**.
- **Hint:** จากช่อง W ลูกศรชี้ไปทางขวา จะพาไปยังช่องใด จากนั้นดูลูกศรของช่องนั้นว่าชี้ไปทางไหนต่อ
- **Answer:** **WIND**
- **Accepted Answers:** `["WIND", "wind", "วินด์", "ลม"]`
- **Explanation:**
  1. เริ่มที่จุด START คือตัว **W**
  2. ลูกศรในช่อง W ชี้ขวา &rarr; ไปที่ช่อง **I**
  3. ลูกศรในช่อง I ชี้ลง &rarr; ไปที่ช่อง **N**
  4. ลูกศรในช่อง N ชี้ขวา &rarr; ไปถึงช่อง GOAL คือตัว **D**
  5. รวมตัวอักษรตลอดเส้นทางได้ **WIND** (ลม)

---

## 4. Small Letters (`small-letters`)
- **Titles:** Small Letters | สังเกตตัวอักษรขนาดเล็ก | 小さい文字
- **Exercise Title:** รหัสลับตัวจิ๋ว (Miniature Hidden Word)
- **Prompt:** สังเกตป้ายคำว่า "PLANET" อย่างละเอียด มีตัวอักษรขนาดเล็กซ่อนอยู่ในบางตัวอักษร จงนำอักษรจิ๋วเหล่านั้นมาเรียงเป็นคำตอบ
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 dark card with cosmic nebula background.
  - **Visual Elements:**
    - Large high-contrast white letters spelling "**P L A N E T**" (font-size 44px).
    - Inside 4 of the letters, tiny subscript amber letters (font-size 13px, colored gold #fbbf24) are placed in the corners:
      - In letter **P**: small `s` in the top loop
      - In letter **L**: small `t` at the bottom angle
      - In letter **A**: small `a` inside the top triangle
      - In letter **R**: (wait, in letter **N**): small `r` on the diagonal stroke
      - Letters E and T have no tiny letters.
    - Underneath is an instruction icon with a magnifying glass.
- **Solution Image Description:**
  - The 4 tiny letters s, t, a, r zoom forward with a golden glow and align together: "**STAR**".
- **Hint:** ใช้แว่นขยายสังเกตข้างในตัวอักษร P, L, A, N ว่ามีตัวอักษรเล็กๆ อะไรแอบซ่อนอยู่
- **Answer:** **STAR**
- **Accepted Answers:** `["STAR", "star", "สตาร์", "ดาว"]`
- **Explanation:**
  1. ตัวอักษรตัวใหญ่สะกดว่า PLANET เป็นเพียงฉากหน้า
  2. เมื่อสังเกตตัวอักษรจิ๋วที่ซ่อนอยู่ภายใน:
     - ในตัว P มีตัว **s**
     - ในตัว L มีตัว **t**
     - ในตัว A มีตัว **a**
     - ในตัว N มีตัว **r**
  3. นำตัวอักษรจิ๋วมาเรียงกันได้คำว่า **STAR** (ดวงดาว)

---

## 5. Add Dakuten (`add-dakuten`)
- **Titles:** Add Dakuten | เติมเครื่องหมายเสียงขุ่น | 濁点を付ける
- **Exercise Title:** เสียงขุ่นแปลงความหมาย (Dakuten Sound Shift)
- **Prompt:** สังเกตกฎการเปลี่ยนความหมายเมื่อเติมเครื่องหมายเสียงขุ่น (`゛`) แล้วหาคำตอบภาษาอังกฤษของเครื่องหมาย [ ? ]
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 Japanese indigo (#0f172a) card with Japanese cloud motif.
  - **Visual Elements:**
    - Row 1: 「 たい (TAI) 」 + ゛ &rarr; 「 だい (DAI) 」 (ปลา &rarr; แท่นวาง)
    - Row 2: 「 さる (SARU) 」 + ゛ &rarr; 「 ざる (ZARU) 」 (ลิง &rarr; ตะกร้า)
    - Row 3: 「 かき (KAKI) 」 + ゛ &rarr; 「 [ ? ] 」 (ลูกพลับ &rarr; กุญแจ)
    - Note next to row 3: "คำตอบคือชื่อภาษาอังกฤษของสิ่งนี้ (4 ตัวอักษร)"
- **Solution Image Description:**
  - Row 3 reveals: 「 かき (KAKI) 」 + ゛ &rarr; 「 **かぎ (KAGI)** 」 = **KEY** พร้อมไอคอนรูปกุญแจสีทอง
- **Hint:** เติมเครื่องหมาย ゛ ให้กับตัวอักษรตัวที่สองของ かき จะกลายเป็นคำว่า かぎ ซึ่งหมายถึงกุญแจในภาษาญี่ปุ่น (ภาษาอังกฤษ 3 ตัวอักษร: KEY)
- **Answer:** **KEY**
- **Accepted Answers:** `["KEY", "key", "คีย์", "กุญแจ", "KAGI", "kagi"]`
- **Explanation:**
  1. กฎของ Dakuten (゛) คือการเปลี่ยนเสียงวรรณยุกต์/พยัญชนะให้อยู่ในรูปเสียงขุ่น (T &rarr; D, S &rarr; Z, K &rarr; G)
  2. คำว่า かき (Kaki) เมื่อเติมเสียงขุ่นที่ตัวหลัง จะกลายเป็น **かぎ (Kagi)**
  3. Kagi แปลว่า "กุญแจ" ในภาษาญี่ปุ่น ซึ่งในภาษาอังกฤษคือคำว่า **KEY**

---

## 6. Matching Symbols and Numbers (`matching-symbols-and-numbers`)
- **Titles:** Matching Symbols and Numbers | จับคู่สัญลักษณ์หรือตัวเลขที่เหมือนกัน | 同じ記号・数字を合わせる
- **Exercise Title:** ถอดรหัสคู่สัญลักษณ์ (Geometric Symbol Pairs)
- **Prompt:** แต่ละสัญลักษณ์เรขาคณิตตรงกับตัวอักษร 1 ตัว จงถอดรหัสข้อความที่กำหนดจากสัญลักษณ์ทั้ง 4
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 dark slate card.
  - **Visual Elements:**
    - Reference Bank (ด้านบน):
      - [ ▲ = M ] , [ ◆ = O ] , [ ★ = O ] , [ ● = N ]
    - Puzzle Slot (ด้านล่าง):
      - แถวของกล่องปริศนา: [ ▲ ] &mdash; [ ◆ ] &mdash; [ ★ ] &mdash; [ ● ]
      - มีลูกศรชี้ลงแสดงการแทนค่าสัญลักษณ์ลงในช่องคำตอบ
- **Solution Image Description:**
  - กล่องปริศนาเปลี่ยนเป็นสีเขียวมรกตและแสดงตัวอักษร: **M - O - O - N**
- **Hint:** นำตัวอักษรที่ตรงกับแต่ละสัญลักษณ์ (สามเหลี่ยม, ข้าวหลามตัด, ดาว, วงกลม) มาแทนค่าตามลำดับ
- **Answer:** **MOON**
- **Accepted Answers:** `["MOON", "moon", "มูน", "ดวงจันทร์"]`
- **Explanation:**
  1. แทนค่า ▲ ด้วย **M**
  2. แทนค่า ◆ ด้วย **O**
  3. แทนค่า ★ ด้วย **O**
  4. แทนค่า ● ด้วย **N**
  5. รวมคำได้ **MOON** (ดวงจันทร์)

---

## 7. Pictures to Words (`pictures-to-words`)
- **Titles:** Turn Pictures into Words | แปลงภาพเป็นคำ | 絵を言葉にする
- **Exercise Title:** สมการภาพบอกคำ (Pictogram Equation)
- **Prompt:** แปลงภาพเป็นคำศัพท์ภาษาอังกฤษแล้วคำนวณตามเครื่องหมาย บวก/ลบ ตัวอักษร เพื่อหาคำศัพท์ใหม่
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 dark slate card with clean playful icons.
  - **Visual Elements:**
    - [ภาพดวงอาทิตย์สีส้มทอง / SUN] + [ภาพแว่นตาสีฟ้า / GLASSES] = [ ? ]
    - หรือสมการแบบตัดอักษร:
      [ภาพสุนัข / DOG] - [D] + [ภาพนกฮูก / OWL] - [L] + [ภาพรังนก / NEST] - [EST] = ?
      *เพื่อความกระชับและชัดเจนสูง:*
      [ภาพหิมะ / SNOW] + [ภาพผู้ชายสวมหมวก / MAN] = [ ? ] (6 ตัวอักษร)
    - ใต้ภาพแต่ละภาพมีขีดเส้นใต้ระบุความยาวตัวอักษร: `_ _ _ _` + `_ _ _` = `_ _ _ _ _ _`
- **Solution Image Description:**
  - รูปตุ๊กตาหิมะสีขาวน่ารักปรากฏขึ้นพร้อมข้อความเรืองแสงสีเขียว: "**SNOWMAN**"
- **Hint:** รวมคำศัพท์ของ "หิมะ (4 อักษร)" และ "ผู้ชาย (3 อักษร)" เข้าด้วยกัน
- **Answer:** **SNOWMAN**
- **Accepted Answers:** `["SNOWMAN", "snowman", "สโนว์แมน", "ตุ๊กตาหิมะ"]`
- **Explanation:**
  1. ภาพที่หนึ่งคือ หิมะ = **SNOW**
  2. ภาพที่สองคือ ผู้ชาย = **MAN**
  3. นำคำมารวมกัน: SNOW + MAN = **SNOWMAN** (ตุ๊กตาหิมะ)

---

## 8. Fill in the Blanks (`fill-in-the-blanks`)
- **Titles:** Fill in the Blanks | เติมคำในช่องว่าง | 穴埋め
- **Exercise Title:** อักษรคู่ที่หายไป (Twin Missing Letters)
- **Prompt:** ทุกคำในรายการมีตัวอักษรภาษาอังกฤษคู่เดียวกันหายไป จงหาว่าตัวอักษร 2 ตัวที่หายไปคืออะไร
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 dark slate card.
  - **Visual Elements:**
    - 3 แถบการ์ดแนวนอนเรียงจากบนลงล่าง:
      - แถบ 1: `B [ ? ] [ ? ] K` (ความหมาย: หนังสือ)
      - แถบ 2: `F [ ? ] [ ? ] D` (ความหมาย: อาหาร)
      - แถบ 3: `M [ ? ] [ ? ] N` (ความหมาย: ดวงจันทร์)
    - กล่อง [ ? ] [ ? ] เป็นช่องสีส้มไฮไลท์ที่เชื่อมกัน
- **Solution Image Description:**
  - ช่องว่างทั้งหมดถูกเติมด้วยตัวอักษรสีเขียวมรกต "**OO**":
    - B**OO**K, F**OO**D, M**OO**N
- **Hint:** คำว่าหนังสือคือ BOOK และอาหารคือ FOOD ลองดูว่าตัวอักษรใดอยู่ในช่องว่าง
- **Answer:** **OO**
- **Accepted Answers:** `["OO", "oo", "โอโอ", "O", "o"]`
- **Explanation:**
  1. คำแรก: หนังสือ = B**OO**K
  2. คำที่สอง: อาหาร = F**OO**D
  3. คำที่สาม: ดวงจันทร์ = M**OO**N
  4. ตัวอักษรคู่ที่เติมลงในช่องว่างของทุกคำคือ **OO**

---

## 9. Pattern Rules (`pattern-rules`)
- **Titles:** Pattern Rules | ค้นหากฎของรูปแบบ | 法則性を見つける
- **Exercise Title:** กฎเรขาคณิตแห่งตัวอักษร (Polygon Alphabet Cipher)
- **Prompt:** ค้นหากฎความสัมพันธ์ระหว่างรูปทรงเรขาคณิตกับตัวอักษร แล้วหาว่ารูป 6 เหลี่ยมตรงกับตัวอักษรใด
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 dark slate card.
  - **Visual Elements:**
    - 4 แผงเปรียบเทียบเรียงกันในแนวนอน:
      - แผง 1: รูปสามเหลี่ยม (3 ด้าน) &rarr; ตัวอักษร "**C**"
      - แผง 2: รูปสี่เหลี่ยม (4 ด้าน) &rarr; ตัวอักษร "**D**"
      - แผง 3: รูปห้าเหลี่ยม (5 ด้าน) &rarr; ตัวอักษร "**E**"
      - แผง 4: รูปหกเหลี่ยม (6 ด้าน) &rarr; เครื่องหมาย "**[ ? ]**"
- **Solution Image Description:**
  - แผงที่ 4 เผยตัวอักษรสีเขียวเรืองแสง "**F**" พร้อมข้อความสรุป: 6 เหลี่ยม = ลำดับที่ 6 ใน Alphabet = F
- **Hint:** นับจำนวนด้านของแต่ละรูปทรง แล้วเทียบกับลำดับของตัวอักษรในภาษาอังกฤษ (A=1, B=2, C=3, ...)
- **Answer:** **F**
- **Accepted Answers:** `["F", "f", "เอฟ", "6"]`
- **Explanation:**
  1. รูปสามเหลี่ยมมี 3 ด้าน ตรงกับตัวอักษรลำดับที่ 3 คือ **C**
  2. รูปสี่เหลี่ยมมี 4 ด้าน ตรงกับตัวอักษรลำดับที่ 4 คือ **D**
  3. รูปห้าเหลี่ยมมี 5 ด้าน ตรงกับตัวอักษรลำดับที่ 5 คือ **E**
  4. ดังนั้น รูปหกเหลี่ยมมี 6 ด้าน ย่อมตรงกับตัวอักษรลำดับที่ 6 คือ **F**

---

## 10. Find It (`find-it`)
- **Titles:** Find It | ค้นหาสิ่งที่ซ่อนอยู่ | 探し出す
- **Exercise Title:** ตัวอักษรที่ไร้คู่ (The Odd One Out)
- **Prompt:** ในตารางมีตัวอักษรซ้ำกันเป็นคู่อยู่ทุกตัว ยกเว้นตัวอักษรเพียงตัวเดียวที่ไม่มีคู่ จงค้นหาตัวอักษรนั้น
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 dark card.
  - **Visual Elements:**
    - ตาราง 3x5 รวม 15 ช่อง บรรจุตัวอักษร:
      `[A] [B] [C] [D] [E]`
      `[F] [G] [Z] [A] [B]`
      `[C] [D] [E] [F] [G]`
    - ตัวอักษรทุกตัวใช้ฟอนต์และสีฟ้าอ่อนเหมือนกันทั้งหมด
- **Solution Image Description:**
  - ตัวอักษรคู่ (A-A, B-B, C-C, D-D, E-E, F-F, G-G) จะมีเส้นสีเทาเชื่อมจับคู่และหรี่แสงลง
  - เหลือเพียงช่องตรงกลางคือ "**Z**" ที่สว่างเจิดจ้าด้วยสีทอง พร้อมวงแหวนไฮไลท์
- **Hint:** ลองไล่จับคู่ทีละตัว: A มี 2 ตัว, B มี 2 ตัว, C มี 2 ตัว... ตัวไหนที่โผล่มาแค่ตัวเดียว?
- **Answer:** **Z**
- **Accepted Answers:** `["Z", "z", "แซด", "ซี"]`
- **Explanation:**
  1. ตรวจสอบจำนวนตัวอักษรแต่ละตัว:
     - A=2, B=2, C=2, D=2, E=2, F=2, G=2
  2. มีเพียงตัวอักษร **Z** ตัวเดียวเท่านั้นที่ปรากฏเพียง 1 ครั้งในตาราง

---

## 11. Reading Instructions (`reading-instructions`)
- **Titles:** Reading Instructions | ทำตามคำสั่งการอ่าน | 読み方の指示
- **Exercise Title:** ทำตามคำสั่งลับ (Filtered Reading)
- **Prompt:** อ่านและปฏิบัติตามคำสั่งในกรอบสีทองอย่างเคร่งครัดเพื่อหาคำตอบ
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 dark slate card.
  - **Visual Elements:**
    - คำสั่งในกรอบสีทองด้านบน:
      `"จงอ่านเฉพาะตัวอักษรสีแดงจากขวาไปซ้าย โดยข้ามตัวอักษรสีขาวทั้งหมด"`
    - แถวตัวอักษรด้านล่าง:
      `K(ขาว)  P(แดง)  L(ขาว)  I(แดง)  M(ขาว)  L(แดง)  T(ขาว)`
- **Solution Image Description:**
  - ตัวอักษรสีขาวจางหายไป
  - ลูกศรสีทองชี้จากขวาไปซ้าย: L &larr; I &larr; P
  - รวมคำกลายเป็น "**LIP**" (ริมฝีปาก)
- **Hint:** คัดเฉพาะตัวอักษรสีแดงออกมา (P, I, L) แล้วอ่านย้อนทิศทางจากขวาไปซ้าย
- **Answer:** **LIP**
- **Accepted Answers:** `["LIP", "lip", "ลิป", "ริมฝีปาก"]`
- **Explanation:**
  1. ตัวอักษรสีแดงตามลำดับจากซ้ายไปขวาคือ P, I, L
  2. คำสั่งระบุให้ "อ่านจากขวาไปซ้าย"
  3. เมื่ออ่านย้อนจากขวาสุดกลับมา: L &rarr; I &rarr; P จะได้คำว่า **LIP**

---

## 12. Vertical and Horizontal Reading (`vertical-horizontal-reading`)
- **Titles:** Vertical and Horizontal Reading | อ่านแนวตั้งและแนวนอน | タテ・ヨコを読む
- **Exercise Title:** ตารางสี่แยกตัวอักษร (Crossroads Grid)
- **Prompt:** ตาราง 3x3 นี้ แนวนอนอ่านได้คำว่า TOP, ICE, GEM จงอ่านแนวตั้งหลักที่ 1 จากบนลงล่าง เพื่อหาคำตอบ
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 dark slate card.
  - **Visual Elements:**
    - ตาราง 3x3 ที่มีเส้นขอบชัดเจน:
      - แถว 1 (แนวนอน): `[ T ]  [ O ]  [ P ]`
      - แถว 2 (แนวนอน): `[ I ]  [ C ]  [ E ]`
      - แถว 3 (แนวนอน): `[ E ]  (wait: [ T ] [ I ] [ N ]? Let's use: T O P / E Y E / N E T? No, for Col 1 = T - I - N = TIN!)`
      - แถว 1: `[ T ]  [ O ]  [ P ]` (TOP)
      - แถว 2: `[ I ]  [ C ]  [ E ]` (ICE)
      - แถว 3: `[ N ]  [ E ]  [ T ]` (NET)
    - มีลูกศรสีทองชี้กำกับลงที่แนวตั้งหลักแรก (Column 1)
- **Solution Image Description:**
  - แนวตั้งหลักแรก [ T ], [ I ], [ N ] เรืองแสงสีเขียวมรกตพร้อมคำอ่านเด่นชัด: "**TIN**"
- **Hint:** ดูตัวอักษรตัวแรกของแต่ละแถวแนวนอน: แถว 1 คือ T, แถว 2 คือ I, แถว 3 คือ N
- **Answer:** **TIN**
- **Accepted Answers:** `["TIN", "tin", "ทิน", "ดีบุก", "กระป๋อง"]`
- **Explanation:**
  1. ตัวอักษรในแนวตั้งหลักที่ 1 จากบนลงล่าง:
     - แถวบนสุดคือตัว **T** (จากคำว่า TOP)
     - แถวกลางคือตัว **I** (จากคำว่า ICE)
     - แถวล่างสุดคือตัว **N** (จากคำว่า NET)
  2. รวมตัวอักษรในแนวตั้งได้คำว่า **TIN** (ดีบุก / กระป๋องโลหะ)

---

## 13. Read Between (`read-between`)
- **Titles:** Read Between | อ่านสิ่งที่อยู่ระหว่างกลาง | 間を読む
- **Exercise Title:** อ่านตัวอักษรในช่องว่าง (Mind the Gap)
- **Prompt:** ในแต่ละคู่ตัวอักษร จงหาตัวอักษรภาษาอังกฤษที่อยู่ตรงกลางระหว่างกัน แล้วนำมาเรียงเป็นคำตอบ 4 ตัวอักษร
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 dark slate card.
  - **Visual Elements:**
    - 4 การ์ดแนวนอน:
      1. `[ A ] &mdash; [ ? ] &mdash; [ C ]`
      2. `[ D ] &mdash; [ ? ] &mdash; [ F ]`
      3. `[ R ] &mdash; [ ? ] &mdash; [ T ]`
      4. `[ S ] &mdash; [ ? ] &mdash; [ U ]`
    - ช่อง [ ? ] ตรงกลางมีการไฮไลท์ด้วยกรอบสีฟ้าอ่อน
- **Solution Image Description:**
  - ช่องว่างทั้ง 4 เผยตัวอักษร:
    1. ระหว่าง A กับ C คือ **B**
    2. ระหว่าง D กับ F คือ **E**
    3. ระหว่าง R กับ T คือ **S**
    4. ระหว่าง S กับ U คือ **T**
  - ตัวอักษรลอยมารวมกันเป็นคำว่า "**BEST**"
- **Hint:** ตัวอักษรภาษาอังกฤษที่อยู่ระหว่าง A กับ C ใน Alphabet คือตัวอะไร? ทำแบบเดียวกันกับคู่อื่นๆ
- **Answer:** **BEST**
- **Accepted Answers:** `["BEST", "best", "เบสท์", "ดีที่สุด"]`
- **Explanation:**
  1. ระหว่าง A กับ C ในลำดับ Alphabet คือตัว **B**
  2. ระหว่าง D กับ F ในลำดับ Alphabet คือตัว **E**
  3. ระหว่าง R กับ T ในลำดับ Alphabet คือตัว **S**
  4. ระหว่าง S กับ U ในลำดับ Alphabet คือตัว **T**
  5. รวมตัวอักษรทั้ง 4 ตัวได้คำว่า **BEST**

---

## 14. Correspondence Table (`correspondence-table`)
- **Titles:** Correspondence Table | ใช้ตารางจับคู่ | 対応表を使う
- **Exercise Title:** ตารางถอดรหัสลับ (Cipher Grid Lookup)
- **Prompt:** ใช้ตารางจับคู่พิกัดด้านซ้ายเพื่อถอดรหัสพิกัดทั้ง 4 ด้านขวาให้เป็นคำศัพท์
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 dark slate card.
  - **Visual Elements:**
    - ฝั่งซ้าย (ตาราง 2x2):
      - แถว 1: คอลัมน์ X = **G**, คอลัมน์ Y = **O**
      - แถว 2: คอลัมน์ X = **L**, คอลัมน์ Y = **D**
      - หัวแถวกำกับด้วยเลข 1 และ 2, หัวคอลัมน์กำกับด้วย X และ Y
    - ฝั่งขวา (รหัสที่ต้องถอด):
      - `[ 1X ] &mdash; [ 1Y ] &mdash; [ 2X ] &mdash; [ 2Y ] = ?`
- **Solution Image Description:**
  - ช่องรหัสฝั่งขวาเปลี่ยนเป็นตัวอักษรสีทอง:
    - 1X &rarr; **G**
    - 1Y &rarr; **O**
    - 2X &rarr; **L**
    - 2Y &rarr; **D**
  - รวมเป็นคำว่า "**GOLD**"
- **Hint:** ดูว่าช่องแถว 1 คอลัมน์ X คือตัวอะไร, แถว 1 คอลัมน์ Y คือตัวอะไร แล้วเทียบตามลำดับ
- **Answer:** **GOLD**
- **Accepted Answers:** `["GOLD", "gold", "โกลด์", "ทอง", "ทองคำ"]`
- **Explanation:**
  1. พิกัด 1X (แถว 1, หลัก X) คือตัว **G**
  2. พิกัด 1Y (แถว 1, หลัก Y) คือตัว **O**
  3. พิกัด 2X (แถว 2, หลัก X) คือตัว **L**
  4. พิกัด 2Y (แถว 2, หลัก Y) คือตัว **D**
  5. รวมคำได้ **GOLD** (ทองคำ)

---

## 15. Use the Question Text (`use-the-question-text`)
- **Titles:** Use the Question Text | ใช้ข้อความโจทย์เป็นส่วนหนึ่งของคำตอบ | 問題文を使う
- **Exercise Title:** ถอดรหัสอักษรต้นแถว (Acrostic Clue)
- **Prompt:** คำตอบของปริศนานี้ซ่อนอยู่ในข้อความกลอนภาษาอังกฤษ 4 บรรทัด จงสังเกตและดึงคำตอบออกมา
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 dark slate card สไตล์กระดาษโน้ตโบราณ
  - **Visual Elements:**
    - ข้อความ 4 บรรทัดที่จัดวางชิดซ้าย โดยมีตัวอักษรแรกของแต่ละบรรทัดขนาดใหญ่กว่าปกติเล็กน้อย:
      - "**C** lever solvers seek"
      - "**O** pen minds will find"
      - "**D** eep inside the rhyme"
      - "**E** very secret clue"
    - ด้านล่างมีช่องคำตอบ 4 ช่อง: `[ _ ] [ _ ] [ _ ] [ _ ]`
- **Solution Image Description:**
  - ตัวอักษรแรกสุดของทั้ง 4 บรรทัด (C, O, D, E) เปลี่ยนเป็นสีเขียวมรกตและมีกรอบครอบ
  - เส้นลูกศรสีทองลากลงมาเติมในช่องคำตอบ: "**CODE**"
- **Hint:** สังเกตตัวอักษรตัวแรกสุดของแต่ละบรรทัด (Acrostic) จากบนลงล่าง
- **Answer:** **CODE**
- **Accepted Answers:** `["CODE", "code", "โค้ด", "รหัส"]`
- **Explanation:**
  1. นำตัวอักษรตัวแรกของแต่ละบรรทัดมาอ่านต่อกันจากบนลงล่าง:
     - บรรทัดที่ 1: **C** (Clever...)
     - บรรทัดที่ 2: **O** (Open...)
     - บรรทัดที่ 3: **D** (Deep...)
     - บรรทัดที่ 4: **E** (Every...)
  2. รวมเป็นคำว่า **CODE** (รหัส)
