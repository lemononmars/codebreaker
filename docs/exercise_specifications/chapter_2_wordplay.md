# Chapter 2: Wordplay (เล่นคำและภาษา)
**Total Mechanics:** 25  
**Theme Focus:** Linguistic transformations, letter subtractions/replacements, bilingual puns, anagrams, morphemes, and word riddles.

---

## 1. Tanuki Removal (`tanuki-removal`)
- **Titles:** Tanuki Removal | ตัดตัวอักษรตามคำใบ้ | たぬき（文字を抜く）
- **Exercise Title:** กฎตัดทิ้งทานุกิ (The Tanuki Deletion Rule)
- **Prompt:** ตามกฎปริศนา "ทานุกิ" (Ta-Nuki แปลว่า ตัดตัว 'T' หรือ 'Ta' ทิ้ง) จงตัดตัวอักษร 'T' ทั้งหมดออกจากข้อความ แล้วอ่านคำที่เหลือ
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 slate card with an illustrated tanuki mascot head silhouette in the corner.
  - **Visual Elements:**
    - กล่องข้อความสไตล์ป้ายไม้:
      `" T &bull; G &bull; T &bull; O &bull; T &bull; A &bull; T &bull; T "`
    - มีป้ายคำใบ้ที่มีรูปทานุกิกำกับ: `[ 🚫 T = ตัดตัว T ทั้งหมดออก ]`
- **Solution Image Description:**
  - ตัวอักษร T ทั้งหมดถูกขีดฆ่าด้วยรอยกรงเล็บสีแดงแล้วสลายตัวไป
  - ตัวอักษรที่เหลือเลื่อนมาชิดกันเป็นคำว่า: "**GOAT**" (แพะ) พร้อมไอคอนรูปแพะน่ารัก
- **Hint:** ตัดตัว T ทั้ง 5 ตัวออกจากแถวตัวอักษร จะเหลือตัวอะไรบ้าง?
- **Answer:** **GOAT**
- **Accepted Answers:** `["GOAT", "goat", "โกท", "แพะ"]`
- **Explanation:**
  1. คำว่า Tanuki ในภาษาญี่ปุ่นเป็นการเล่นคำ: Ta (ตัว ทะ) + Nuki (ดึงออก/ตัดทิ้ง)
  2. เมื่อตัดตัวอักษร T ทั้งหมดออกจาก "T G T O T A T T"
  3. จะเหลือตัวอักษร G - O - A - T = **GOAT** (แพะ)

---

## 2. Megane Replacement (`megane-replacement`)
- **Titles:** Megane Replacement | แทนที่ตัวอักษรตามคำใบ้ | めがね（文字を置き換える）
- **Exercise Title:** แว่นตาสลับอักษร (Megane Letter Swap)
- **Prompt:** กฎปริศนา "เมงาเนะ" (แว่นตา) กำหนดให้เปลี่ยนตัวอักษร 'E' ทุกตัวเป็น 'O' จงแปลงคำว่า "LEMEN" ให้เป็นคำศัพท์ที่ถูกต้อง
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 dark slate card.
  - **Visual Elements:**
    - มีแว่นตากรอบกลมสีทอง (Megane) วางอยู่ตรงกลางเชื่อมโยงกฎ:
      `[ E ] &rarr; 👓 &rarr; [ O ]`
    - ด้านล่างมีป้ายคำว่า `L &bull; E &bull; M &bull; O &bull; N` หรือ `L &bull; E &bull; M &bull; E &bull; N`
      (คำโจทย์คือ: `L - E - M - E - N` โดยตัว E มีกรอบแว่นตาคลุมอยู่)
- **Solution Image Description:**
  - ตัว E ตัวที่สองถูกเปลี่ยนเป็นตัว O สีเหลืองมะนาว: "**LEMON**" พร้อมภาพผลเลมอนสดใส
- **Hint:** เปลี่ยนตัวอักษร E ตัวสุดท้ายของ LEMEN ให้เป็นตัว O ตามกฎของแว่นตา
- **Answer:** **LEMON**
- **Accepted Answers:** `["LEMON", "lemon", "เลมอน", "มะนาว"]`
- **Explanation:**
  1. ปริศนาแนว Megane หมายถึงการเปลี่ยนรูปตัวอักษรเป้าหมาย (ในที่นี้คือ E &rarr; O)
  2. คำตั้งต้นคือ LEMEN เมื่อเปลี่ยนตัว E ตัวหลังให้เป็น O
  3. จะได้คำว่า **LEMON** (เลมอน)

---

## 3. Nth Letter (`nth-letter`)
- **Titles:** Nth Letter | เลือกตัวอักษรลำดับที่กำหนด | ○番目の文字
- **Exercise Title:** สกัดอักษรตามลำดับ (Nth Letter Extraction)
- **Prompt:** นำตัวอักษรตามลำดับที่ระบุในวงเล็บของแต่ละคำ มารวมกันเป็นรหัสผ่าน 4 ตัวอักษร
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 dark slate card.
  - **Visual Elements:**
    - 4 บรรทัดพร้อมไอคอนการ์ด:
      1. `S U N [1]` &rarr; กล่องตัวที่ 1
      2. `P E A R [2]` &rarr; กล่องตัวที่ 2
      3. `B E A R [2]` (หรือ `S H I P [3]` &rarr; [3])
      4. `M O O N [4]` &rarr; กล่องตัวที่ 4
    - ปรับให้ได้คำว่า SPIN:
      - `S U N [1]` (ดึงตัวที่ 1 = S)
      - `P E N [1]` (ดึงตัวที่ 1 = P)
      - `F I S H [2]` (ดึงตัวที่ 2 = I)
      - `L I O N [4]` (ดึงตัวที่ 4 = N)
- **Solution Image Description:**
  - ตัวอักษร S, P, I, N สว่างวาบและลอยมารวมกันในช่องรหัส: "**SPIN**"
- **Hint:** ดึงตัวที่ 1 ของ SUN (S), ตัวที่ 1 ของ PEN (P), ตัวที่ 2 ของ FISH (I), ตัวที่ 4 ของ LION (N)
- **Answer:** **SPIN**
- **Accepted Answers:** `["SPIN", "spin", "สปิน", "หมุน"]`
- **Explanation:**
  1. ตัวที่ 1 ของ **S**UN คือ **S**
  2. ตัวที่ 1 ของ **P**EN คือ **P**
  3. ตัวที่ 2 ของ F**I**SH คือ **I**
  4. ตัวที่ 4 ของ LIO**N** คือ **N**
  5. รวมคำตามลำดับได้ **SPIN** (หมุน)

---

## 4. English–Japanese Conversion (`english-japanese-conversion`)
- **Titles:** English–Japanese Conversion | แปลงระหว่างภาษาอังกฤษกับภาษาญี่ปุ่น | 日英変換
- **Exercise Title:** สะพานสองภาษา (Bilingual Bridge)
- **Prompt:** สังเกตการจับคู่คำศัพท์ อังกฤษ &harr; ญี่ปุ่น แล้วหาคำแปลภาษาอังกฤษของคำว่า "TSUKI" (月)
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 card with Japanese aesthetic.
  - **Visual Elements:**
    - คู่ที่ 1: `SUN &harr; TAIYOU (太陽)` (ดวงอาทิตย์)
    - คู่ที่ 2: `STAR &harr; HOSHI (星)` (ดวงดาว)
    - คู่ที่ 3: `[ ? ] &harr; TSUKI (月)` (4 ตัวอักษร)
- **Solution Image Description:**
  - ช่อง [ ? ] เผยคำว่า "**MOON**" สีทองสว่างคู่กับพระจันทร์เสี้ยว
- **Hint:** พระอาทิตย์คู่กับ SUN, ดวงดาวคู่กับ STAR, พระจันทร์ (TSUKI) ในภาษาอังกฤษคือคำว่าอะไร?
- **Answer:** **MOON**
- **Accepted Answers:** `["MOON", "moon", "มูน", "ดวงจันทร์", "พระจันทร์"]`
- **Explanation:**
  1. ความสัมพันธ์คือการแปลคำศัพท์ดาราศาสตร์ระหว่างภาษาอังกฤษกับภาษาญี่ปุ่น
  2. TSUKI (月) ในภาษาญี่ปุ่นหมายถึง "ดวงจันทร์"
  3. คำภาษาอังกฤษ 4 ตัวอักษรคือ **MOON**

---

## 5. Script Conversion (`script-conversion`)
- **Titles:** Script Conversion | แปลงชนิดตัวอักษร | 文字種の変換
- **Exercise Title:** แปลงร่างตัวอักษรญี่ปุ่น (Hiragana to Katakana)
- **Prompt:** แปลงตัวอักษรฮิรางานะ 「ねこ」 (NE-KO / แมว) เป็นตัวอักษรคาตากานะเพื่อถอดรหัส
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 dark slate card.
  - **Visual Elements:**
    - ตารางเปรียบเทียบตัวอักษร:
      - ฮิรางานะ 「いぬ」 &rarr; คาตากานะ 「イヌ」 (สุนัข)
      - ฮิรางานะ 「とり」 &rarr; คาตากานะ 「トリ」 (นก)
      - ฮิรางานะ 「ねこ」 &rarr; คาตากานะ 「 [ ? ] 」 (2 ตัวอักษร: NE-KO)
    - ให้ระบุคำอ่านโรมะจิหรือคำทับศัพท์: "NEKO"
- **Solution Image Description:**
  - เผยตัวอักษรคาตากานะ 「**ネコ**」 พร้อมเสียงอ่านภาษาอังกฤษ "**NEKO**" (แมว)
- **Hint:** เสียงอ่านของ ね คือ ネ และ こ คือ コ รวมเป็น NEKO
- **Answer:** **NEKO**
- **Accepted Answers:** `["NEKO", "neko", "เนโกะ", "ネコ", "แมว"]`
- **Explanation:**
  1. กฎการแปลงคือการเปลี่ยนจากตัวเขียน Hiragana เป็น Katakana
  2. 「ねこ」 เขียนในรูป Katakana ได้เป็น 「**ネコ**」
  3. อ่านเป็นภาษาอังกฤษ/โรมะจิได้ว่า **NEKO** (แมว)

---

## 6. Romaji Conversion (`romaji-conversion`)
- **Titles:** Romaji Conversion | แปลงเป็นหรือจากโรมาจิ | ローマ字変換
- **Exercise Title:** ถอดรหัสเสียงโรมะจิ (Romaji Cipher)
- **Prompt:** นำพยัญชนะภาษาอังกฤษต้นเสียงของสัตว์ญี่ปุ่น 3 ชนิด: **U**SAGI (กระต่าย), **M**ARU (วงกลม), **I**NU (สุนัข) มาต่อกันเป็นคำว่า "ทะเล" ในภาษาญี่ปุ่น
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 dark slate card.
  - **Visual Elements:**
    - 3 ภาพประกอบ:
      - ภาพกระต่าย &rarr; `[U] SAGI` (ตัว U ถูกเน้นสีฟ้า)
      - ภาพม้า &rarr; `[M] UMA` (ตัว M ถูกเน้นสีฟ้า)
      - ภาพสุนัข &rarr; `[I] NU` (ตัว I ถูกเน้นสีฟ้า)
    - รวม: `[ U ] + [ M ] + [ I ] = [ ? ]`
- **Solution Image Description:**
  - ตัวอักษรสีฟ้ารวมกันเป็นคำว่า "**UMI**" (海 / ทะเล) พร้อมระลอกคลื่นสีฟ้าคราม
- **Hint:** รวมตัวอักษรตัวแรกของแต่ละคำ: U + M + I
- **Answer:** **UMI**
- **Accepted Answers:** `["UMI", "umi", "อุมิ", "ทะเล"]`
- **Explanation:**
  1. ตัวแรกของ USAGI คือ **U**
  2. ตัวแรกของ UMA หรือม้า (หรือ MARU) คือ **M**
  3. ตัวแรกของ INU คือ **I**
  4. รวมกันเป็น **UMI** ซึ่งในภาษาญี่ปุ่นแปลว่า "ทะเล"

---

## 7. Symbol–Letter Conversion (`symbol-letter-conversion`)
- **Titles:** Symbol–Letter Conversion | แปลงสัญลักษณ์เป็นตัวอักษร | 記号を文字に変換
- **Exercise Title:** รหัสมอร์สปริศนา (Morse Signal)
- **Prompt:** ถอดรหัสสัญญาณมอร์สที่แสดงด้วยจุดและขีด เพื่อหาคำตอบภาษาอังกฤษ 3 ตัวอักษร
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 dark card with telegraph theme.
  - **Visual Elements:**
    - Reference Chart ด้านข้าง:
      `S = &bull; &bull; &bull;`  |  `O = &mdash; &mdash; &mdash;`
    - รหัสที่แสดงบนหน้าจอคลื่นสัญญาณ:
      `[ &bull; &bull; &bull; ]   /   [ &mdash; &mdash; &mdash; ]   /   [ &bull; &bull; &bull; ]`
- **Solution Image Description:**
  - สัญญาณมอร์สเปลี่ยนเป็นตัวอักษรสีแดงเรืองแสงระดับสากล: "**SOS**"
- **Hint:** จุดสามจุดคือตัว S, ขีดยาวสามขีดคือตัว O
- **Answer:** **SOS**
- **Accepted Answers:** `["SOS", "sos", "เอสโอเอส"]`
- **Explanation:**
  1. `&bull; &bull; &bull;` ในรหัสมอร์สคือตัวอักษร **S**
  2. `&mdash; &mdash; &mdash;` ในรหัสมอร์สคือตัวอักษร **O**
  3. `&bull; &bull; &bull;` อีกครั้งคือตัวอักษร **S**
  4. รวมกันเป็นสัญญาณขอความช่วยเหลือสากล **SOS**

---

## 8. Split and Join Words (`split-and-join-words`)
- **Titles:** Split and Join Words | แบ่งและรวมคำ | 言葉の分解と合体
- **Exercise Title:** แยกส่วนแล้วรวมพลัง (Compound Word Fusion)
- **Prompt:** นำคำสองคำที่กำหนดมารวมกันเพื่อสร้างคำศัพท์ใหม่ที่มีความหมายตรงกับ "รุ้งกินน้ำ"
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 card with rain and rainbow theme.
  - **Visual Elements:**
    - กล่องคำซ้าย: `[ R A I N ]` (ฝนตก) พร้อมภาพหยดน้ำ
    - เครื่องหมาย `+` ตรงกลาง
    - กล่องคำขวา: `[ B O W ]` (คันศร/โบว์) พร้อมภาพคันธนู
    - เครื่องหมาย `=` และกล่องคำตอบยาว 7 ตัวอักษร: `[ ? ? ? ? ? ? ? ]`
- **Solution Image Description:**
  - เส้นสายรุ้ง 7 สีโค้งสว่างวาบเชื่อมทั้งสองคำเป็น "**RAINBOW**"
- **Hint:** ฝน (RAIN) รวมกับ คันธนู (BOW) กลายเป็นปรากฏการณ์ธรรมชาติบนท้องฟ้า
- **Answer:** **RAINBOW**
- **Accepted Answers:** `["RAINBOW", "rainbow", "เรนโบว์", "รุ้ง", "รุ้งกินน้ำ"]`
- **Explanation:**
  1. คำแรกคือ **RAIN** (ฝน)
  2. คำที่สองคือ **BOW** (คันศร)
  3. นำคำมารวมกันได้คำประสม (Compound Word) คือ **RAINBOW** (รุ้งกินน้ำ)

---

## 9. Homophones (`homophones`)
- **Titles:** Homophones | คำพ้องเสียง | 同音異義語
- **Exercise Title:** เสียงเหมือนแต่ความหมายต่าง (Homophone Pairs)
- **Prompt:** คำภาษาอังกฤษ 3 ตัวอักษรที่ออกเสียงเหมือนคำว่า "ดวงอาทิตย์" (SUN) แต่มีความหมายว่า "ลูกชาย" คือคำว่าอะไร?
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 slate card.
  - **Visual Elements:**
    - ด้านซ้าย: ภาพดวงอาทิตย์ยิ้ม พร้อมข้อความ `"SUN" /sʌn/`
    - เครื่องหมาย `&asymp; (ออกเสียงเหมือนกัน)`
    - ด้านขวา: ภาพพ่อจูงมือลูกชาย พร้อมกล่องปริศนา `[ S _ N ]` (ความหมาย: ลูกชาย)
- **Solution Image Description:**
  - กล่องปริศนาเติมตัว O เป็นสีเขียวมรกต: "**SON**"
- **Hint:** พยัญชนะตัวกลางคือสระ O สะกดว่า S - _ - N
- **Answer:** **SON**
- **Accepted Answers:** `["SON", "son", "ซัน", "ลูกชาย"]`
- **Explanation:**
  1. SUN (/sʌn/) แปลว่า ดวงอาทิตย์
  2. คำพ้องเสียงในภาษาอังกฤษที่ออกเสียง /sʌn/ เหมือนกันและแปลว่าลูกชายคือ **SON**

---

## 10. Antonyms (`antonyms`)
- **Titles:** Antonyms | คำตรงข้าม | 反対語
- **Exercise Title:** ขั้วตรงข้ามคู่ปริศนา (Opposite Words)
- **Prompt:** สังเกตคู่คำตรงข้าม แล้วหาคำตรงข้ามของคำว่า "COLD" (หนาว) เพื่อเติมในช่อง [ ? ]
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 slate card แบ่งเป็นธีมร้อน-เย็น.
  - **Visual Elements:**
    - คู่ที่ 1: `DAY &harr; NIGHT` (กลางวัน &harr; กลางคืน)
    - คู่ที่ 2: `UP &harr; DOWN` (ขึ้น &harr; ลง)
    - คู่ที่ 3: `COLD &harr; [ ? ]` (หนาว &harr; ร้อน, 3 ตัวอักษร)
- **Solution Image Description:**
  - เปลวไฟสีส้มแดงลุกโชนในช่อง [ ? ] เผยคำว่า "**HOT**"
- **Hint:** คำตรงข้ามของ หนาว (COLD) คือ ร้อน ในภาษาอังกฤษสะกดด้วย 3 ตัวอักษร
- **Answer:** **HOT**
- **Accepted Answers:** `["HOT", "hot", "ฮอต", "ร้อน"]`
- **Explanation:**
  1. DAY ตรงข้ามกับ NIGHT
  2. UP ตรงข้ามกับ DOWN
  3. COLD (หนาว) ตรงข้ามกับ **HOT** (ร้อน)

---

## 11. Heads and Tails (`heads-and-tails`)
- **Titles:** Heads and Tails | อักษรหัวและอักษรท้าย | 頭文字と末尾
- **Exercise Title:** ประกบหัวท้าย (Head & Tail Extraction)
- **Prompt:** นำตัวอักษรตัวแรกสุด (Head) และตัวสุดท้าย (Tail) ของคำว่า "BEAR" และ "STARS" มาสร้างคำใหม่
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 dark slate card.
  - **Visual Elements:**
    - การ์ดที่ 1: คำว่า `[ B ] E A [ R ]` (เน้นตัว B สีฟ้า และ R สีฟ้า)
    - การ์ดที่ 2: คำว่า `[ B ] O A [ T ]` (เพื่อได้คำว่า BEST: ลองใช้ `[ B ] E [ S ]` + `[ T ]`?
      ปรับใหม่เพื่อความชัดเจนสูงสุด:
      คำว่า `L A M P` &rarr; ดึงหัว L และท้าย P
      คำว่า `I C E` &rarr; ดึงหัว I
      หรือ:
      นำตัวอักษรหัวของคำว่า **C**AT, **A**NT, **R**AT มารวมกัน = CAR!
      หัวท้าย:
      คำว่า **S**TAR**S** &rarr; หัว S ท้าย S
      คำว่า **P**I**N** &rarr; หัว P ท้าย N
      ลอง: ตัวอักษรตัวแรก (Head) ของ 4 คำ:
      **F**ISH, **I**CE, **R**OSE, **E**GG &rarr; FIRE!
- **Solution Image Description:**
  - ตัวอักษรตัวแรกของแต่ละคำสว่างเป็นสีส้มทองลอยมารวมกันเป็น "**FIRE**"
- **Hint:** ดึงตัวแรกของคำว่า Fish (F), Ice (I), Rose (R), Egg (E)
- **Answer:** **FIRE**
- **Accepted Answers:** `["FIRE", "fire", "ไฟ", "ฟายเออร์"]`
- **Explanation:**
  1. ตัวอักษรตัวแรก (Head) ของ Fish คือ **F**
  2. ตัวอักษรตัวแรกของ Ice คือ **I**
  3. ตัวอักษรตัวแรกของ Rose คือ **R**
  4. ตัวอักษรตัวแรกของ Egg คือ **E**
  5. นำมารวมกันได้คำว่า **FIRE** (ไฟ)

---

## 12. Reverse Reading and Palindromes (`reverse-and-palindrome`)
- **Titles:** Reverse Reading and Palindromes | อ่านย้อนกลับและคำพาลินโดรม | 逆さ読み・回文
- **Exercise Title:** ส่องกระจกคำย้อนศร (Mirror Reverse Word)
- **Prompt:** อ่านคำว่า "STAR" ย้อนกลับจากหลังมาหน้าเพื่อหาคำตอบที่มีความหมายว่า "หนูหลายตัว"
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 dark slate card with mirror reflection line.
  - **Visual Elements:**
    - ด้านบน: คำว่า `S - T - A - R` (ดวงดาว)
    - ตรงกลาง: ลูกศรย้อนกลับขนาดใหญ่สีฟ้าครามชี้จากขวาไปซ้าย `&larr; &larr; &larr;`
    - ด้านล่าง: `[ ? ] - [ ? ] - [ ? ] - [ ? ]`
- **Solution Image Description:**
  - คำตอบปรากฏเป็น "**RATS**" (หนู) พร้อมไอคอนรูปหนูน่ารัก
- **Hint:** สลับตำแหน่งตัวอักษร: ตัวสุดท้าย (R) มาเป็นตัวแรก, ตัวถัดมา (A), (T), และ (S)
- **Answer:** **RATS**
- **Accepted Answers:** `["RATS", "rats", "RAT", "rat", "แรทส์", "หนู"]`
- **Explanation:**
  1. คำว่า STAR เมื่ออ่านย้อนกลับจากขวาไปซ้าย:
  2. R &rarr; A &rarr; T &rarr; S
  3. จะได้คำว่า **RATS** (หนู)

---

## 13. Letter Manipulation (`letter-manipulation`)
- **Titles:** Letter Manipulation | จัดการตัวอักษร | 文字操作
- **Exercise Title:** รหัสเลื่อนตัวอักษร (+1 Shift)
- **Prompt:** เลื่อนตัวอักษรทุกตัวไปข้างหน้า 1 ลำดับใน Alphabet (A&rarr;B, B&rarr;C) จงแปลงคำว่า "HAL" ให้เป็นชื่อบริษัทคอมพิวเตอร์ชื่อดัง
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 dark tech matrix card.
  - **Visual Elements:**
    - กล่องรหัสสามกล่อง: `[ H ]  [ A ]  [ L ]`
    - เหนือแต่ละกล่องมีลูกศรเลื่อนขึ้นพร้อมป้าย `[ +1 ]`
    - ด้านล่างมีช่องเป้าหมาย 3 ช่อง
- **Solution Image Description:**
  - ตัวอักษรเลื่อนเป็นสีฟ้าสดใส:
    - H + 1 = **I**
    - A + 1 = **B**
    - L + 1 = **M**
  - รวมกันเป็นโลโก้สีฟ้าคุ้นตา: "**IBM**"
- **Hint:** ตัวถัดไปของ H ในตัวอักษรภาษาอังกฤษคือตัวอะไร? ตัวถัดไปของ A และ L คือตัวอะไร?
- **Answer:** **IBM**
- **Accepted Answers:** `["IBM", "ibm", "ไอบีเอ็ม"]`
- **Explanation:**
  1. H เลื่อนไปข้างหน้า 1 ตัวอักษรได้ **I**
  2. A เลื่อนไปข้างหน้า 1 ตัวอักษรได้ **B**
  3. L เลื่อนไปข้างหน้า 1 ตัวอักษรได้ **M**
  4. รวมเป็นชื่อบริษัทระดับตำนาน **IBM** (มุกคลาสสิกจากนิยายไซไฟ 2001: A Space Odyssey)

---

## 14. Add the Same Letter (`add-the-same-letter`)
- **Titles:** Add the Same Letter | เติมตัวอักษรเดียวกัน | 同じ文字を入れる
- **Exercise Title:** เติมสระตัวเดิม (Monovocalic Insert)
- **Prompt:** เติมตัวอักษรภาษาอังกฤษตัวเดียวกันลงในช่องว่างทั้ง 3 ช่อง เพื่อให้ได้คำศัพท์ที่มีความหมายว่า "กล้วย"
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 dark slate card.
  - **Visual Elements:**
    - แถวตัวอักษรสีเหลืองสดใส:
      `B  [ ? ]  N  [ ? ]  N  [ ? ]`
    - ทั้ง 3 ช่อง [ ? ] เป็นวงกลมสีทองที่มีเส้นเชื่อมโยงกันแสดงว่าเป็นตัวอักษรเดียวกัน
- **Solution Image Description:**
  - ตัวอักษร "**A**" เติมเต็มทั้ง 3 ช่องกลายเป็นคำว่า "**BANANA**" พร้อมภาพผลกล้วย
- **Hint:** ผลไม้สีเหลืองที่ลิงชอบกิน สะกดด้วยตัว B และ N สลับกับสระตัวนี้
- **Answer:** **A**
- **Accepted Answers:** `["A", "a", "เอ", "BANANA", "banana", "บานาน่า", "กล้วย"]`
- **Explanation:**
  1. คำว่ากล้วยในภาษาอังกฤษคือ BANANA
  2. ตัวอักษรที่หายไปในตำแหน่งช่องว่างทั้งสามคือตัว **A** (B-A-N-A-N-A)

---

## 15. Complete Missing Letters (`complete-missing-letters`)
- **Titles:** Complete Missing Letters | เติมตัวอักษรที่ขาด | 抜けている文字を補う
- **Exercise Title:** อักษรที่หายไปของสัปดาห์ (Weekday Omission)
- **Prompt:** ลำดับตัวอักษรย่อของวันในสัปดาห์: M, T, W, [ ? ], F, S, S ตัวอักษรที่ขาดหายไปคือตัวอะไร?
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 card with calendar motif.
  - **Visual Elements:**
    - ปฏิทินแถวแนวนอน 7 วัน:
      `[ M ]  [ T ]  [ W ]  [ ? ]  [ F ]  [ S ]  [ S ]`
      (Monday, Tuesday, Wednesday, ..., Friday, Saturday, Sunday)
    - ช่องที่ 4 มีเครื่องหมายคำถามสีทอง [ ? ]
- **Solution Image Description:**
  - ช่องที่ 4 สว่างขึ้นด้วยตัวอักษรสีส้ม "**T**" (Thursday)
- **Hint:** วันพฤหัสบดี ในภาษาอังกฤษคือ Thursday ตัวย่อคือตัวอะไร?
- **Answer:** **T**
- **Accepted Answers:** `["T", "t", "ที", "THURSDAY", "thursday"]`
- **Explanation:**
  1. ลำดับย่อของ 7 วันในสัปดาห์:
     - M (Monday), T (Tuesday), W (Wednesday), **T** (Thursday), F (Friday), S (Saturday), S (Sunday)
  2. ตัวอักษรที่หายไปในช่องว่างคือตัว **T**

---

## 16. Vowels and Consonants (`vowels-and-consonants`)
- **Titles:** Vowels and Consonants | สระและพยัญชนะ | 母音と子音
- **Exercise Title:** กรองเฉพาะสระ (Vowel Extraction)
- **Prompt:** ดึงเฉพาะ "สระภาษาอังกฤษ" (A, E, I, O, U) ออกมาจากคำว่า "B E A U T Y" ตามลำดับเพื่อหาคำตอบ
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 slate card.
  - **Visual Elements:**
    - คำว่า `B &bull; E &bull; A &bull; U &bull; T &bull; Y`
    - ช่องตัวอักษรพยัญชนะ (B, T, Y) เป็นสีเทาเข้ม
    - ช่องสระ (E, A, U) มีไฮไลท์สีฟ้าอ่อนลอยขึ้นมา
    - ด้านล่างมีช่องเก็บสระ 3 ช่อง: `[ _ ] [ _ ] [ _ ]`
- **Solution Image Description:**
  - สระ E, A, U เรียงตัวสวยงามในช่องคำตอบ: "**EAU**" (ภาษาฝรั่งเศสแปลว่าน้ำ เช่น Eau de parfum)
- **Hint:** สระในภาษาอังกฤษคือ A, E, I, O, U คำว่า BEAUTY มีสระตัวใดเรียงกันอยู่บ้าง?
- **Answer:** **EAU**
- **Accepted Answers:** `["EAU", "eau", "โอ"]`
- **Explanation:**
  1. ในคำว่า BEAUTY สระภาษาอังกฤษที่ปรากฏเรียงกันอยู่คือ **E**, **A**, **U**
  2. รวมเป็นคำว่า **EAU**

---

## 17. Kanji and Katakana Readings (`kanji-katakana-readings`)
- **Titles:** Kanji and Katakana Readings | การอ่านคันจิและคาตากานะ | 漢字とカタカナの読み
- **Exercise Title:** คันจิรูปคาตากานะ (Kanji Resembling Katakana)
- **Prompt:** คันจิ 「口」 (ปาก) มีรูปร่างเหมือนตัวคาตากานะ 「ロ」 (RO) และคันจิ 「二」 (สอง) เหมือนคาตากานะ 「ニ」 (NI) เมื่อรวมกัน ロ + ニ = [ ? ]
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 dark slate card.
  - **Visual Elements:**
    - คันจิ 口 &rarr; คาตากานะ ロ (RO)
    - คันจิ ニ &rarr; คาตากานะ ニ (NI)
    - รวมกัน: 口 + 二 &rarr; ロ + ニ = `[ ? ]` (อ่านเป็นคำว่า RONI)
    - หรือ คันจิ 「力」 (พลัง) = คาตากานะ 「カ」 (KA) + คันจิ 「メ」 (ตา) = คาตากานะ 「メ」 (ME)
      รวมกันเป็น カ + メ = **KAME** (เต่า / 4 ตัวอักษร)
- **Solution Image Description:**
  - ภาพเต่าน้อยสีเขียวน่ารักปรากฏขึ้นพร้อมตัวอักษรคาตากานะ 「**カメ**」 (KAME)
- **Hint:** คันจิตัวแรกคือ カ (KA) และตัวหลังคือ メ (ME) รวมกันเป็นชื่อสัตว์กระดองแข็งในภาษาญี่ปุ่น
- **Answer:** **KAME**
- **Accepted Answers:** `["KAME", "kame", "คาเมะ", "เต่า"]`
- **Explanation:**
  1. คันจิหรือสัญลักษณ์ที่เหมือนคาตากานะ カ (Ka) และ メ (Me)
  2. เมื่อนำมาอ่านต่อกันจะได้คำว่า **KAME** (เต่า)

---

## 18. Combined Kanji (`combined-kanji`)
- **Titles:** Combined Kanji | ประกอบคันจิ | 合体漢字
- **Exercise Title:** ประกอบร่างอักษรคันจิ (Kanji Fusion)
- **Prompt:** รวมคันจิพระอาทิตย์ 「日」 (SUN) และ พระจันทร์ 「月」 (MOON) เข้าด้วยกัน จะได้คันจิใหม่ 「明」 ซึ่งมีความหมายภาษาอังกฤษว่าอะไร? (6 ตัวอักษร)
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 oriental dark card.
  - **Visual Elements:**
    - ซ้าย: คันจิ 「日」 สีทอง (พระอาทิตย์)
    - เครื่องหมาย `+`
    - ขวา: คันจิ 「月」 สีเงิน (พระจันทร์)
    - รวมกันกลายเป็นคันจิ: 「 **明** 」
    - ป้ายคำใบ้ภาษาอังกฤษ: "Opposite of DARK (6 letters)"
- **Solution Image Description:**
  - คันจิเปล่งแสงสว่างจ้าสีทองรอบทิศทาง พร้อมข้อความ: "**BRIGHT**"
- **Hint:** พระอาทิตย์ให้แสงกลางวัน พระจันทร์ให้แสงกลางคืน เมื่ออยู่ด้วยกันย่อมสว่างไสว (ตรงข้ามกับ Dark)
- **Answer:** **BRIGHT**
- **Accepted Answers:** `["BRIGHT", "bright", "ไบรท์", "สว่าง"]`
- **Explanation:**
  1. คันจิ 日 (ดวงอาทิตย์) + 月 (ดวงจันทร์) = **明**
  2. คำนี้แปลว่า สว่างไสว ในภาษาอังกฤษคือคำว่า **BRIGHT**

---

## 19. Rotate to Read (`rotate-to-read`)
- **Titles:** Rotate to Read | หมุนทิศทางแล้วอ่าน | 回転して読む
- **Exercise Title:** หมุน 180 องศาเปลี่ยนความหมาย (180° Inversion)
- **Prompt:** หมุนคำว่า "MOW" กลับหัว 180 องศา จะได้คำศัพท์ภาษาอังกฤษคำใหม่ที่มี 3 ตัวอักษรคือคำว่าอะไร?
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 slate card.
  - **Visual Elements:**
    - ข้อความตัวพิมพ์ใหญ่หนาเด่นชัด: `" M O W "`
    - มีไอคอนลูกศรหมุนวน 180&deg; กำกับอยู่รอบคำ
- **Solution Image Description:**
  - ตัวอักษรหมุนตีลังกากลับหัว 180 องศา:
    - M กลับหัวเป็น W
    - O ยังคงเป็น O
    - W กลับหัวเป็น M
  - ได้คำว่า "**WOM**"? ไม่ใช่! เมื่อหมุน 180 องศาตามระนาบ MOW จะกลายเป็น "**MOW**" กลับหัวคือ W-O-M?
    หากมองกลับหัวจากขวาไปซ้าย M O W &rarr; M-O-W!
    คำที่หมุน 180&deg; คลาสสิก:
    `"SWIMS"` หมุน 180&deg; ยังคงเป็น SWIMS!
    หรือคำว่า `"NOON"` หมุน 180&deg; ยังคงเป็น NOON!
    หรือคำว่า `"M"` &rarr; หมุน 180&deg; กลายเป็น `"W"`!
    ให้โจทย์เป็น: คำว่า `"ME"` หมุน 180&deg;?
    เอาเป็นคำว่า: `"N O O N"` หรือตัวเลข `6 8 9`!
    ลองใช้: ตัวอักษร `M` หมุน 180&deg; กลายเป็น **W**!
    โจทย์: `"M" + "หมุน 180°" = [ ? ]`
    ตอบ **W**
- **Solution Image Description:**
  - ตัว M หมุน 180 องศาแปลงร่างกลายเป็นตัว "**W**" สีเขียวเรืองแสง
- **Hint:** ตัว M คว่ำลงจะกลายเป็นตัวอักษรอะไร?
- **Answer:** **W**
- **Accepted Answers:** `["W", "w", "ดับเบิ้ลยู", "ดับเบิลยู"]`
- **Explanation:**
  1. ตัวอักษร M เมื่อหมุน 180 องศาในแนวระนาบ จะได้รูปทรงของตัวอักษร **W**

---

## 20. Furigana and Okurigana (`furigana-and-okurigana`)
- **Titles:** Furigana and Okurigana | ฟูริงานะและโอคุริงานะ | 振り仮名と送り仮名
- **Exercise Title:** เสียงอ่านบนยอดคันจิ (Furigana Reading)
- **Prompt:** คันจิคำว่า 「星」 (ดวงดาว) มีฟูริงานะกำกับเสียงอ่านด้านบนว่า「ほし」จงเขียนเสียงอ่านนี้เป็นภาษาอังกฤษ (Romaji)
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 dark slate card.
  - **Visual Elements:**
    - คันจิตัวใหญ่: 「 **星** 」
    - ด้านบนมีตัวอักษรฮิรางานะขนาดเล็กกำกับ (Furigana): 「 **ほし** 」
    - คำใบ้: ほ = HO, し = SHI
- **Solution Image Description:**
  - ตัวหนังสือฟูริงานะเปล่งแสงและแปลงเป็นตัวเขียนภาษาอังกฤษ: "**HOSHI**" (ดวงดาว)
- **Hint:** รวมเสียงอ่าน HO + SHI
- **Answer:** **HOSHI**
- **Accepted Answers:** `["HOSHI", "hoshi", "โฮชิ", "ดาว"]`
- **Explanation:**
  1. ตัว ほ ออกเสียงว่า HO
  2. ตัว し ออกเสียงว่า SHI
  3. รวมกันเป็น **HOSHI** ซึ่งเป็นเสียงอ่านคุนโยมิของคันจิ 星 (ดวงดาว)

---

## 21. Hidden Words (`hidden-words`)
- **Titles:** Hidden Words | คำที่ซ่อนอยู่ | 隠された言葉
- **Exercise Title:** สัตว์ร้ายที่ซ่อนอยู่ข้ามคำ (Cross-Word Camouflage)
- **Prompt:** มีชื่อสัตว์ 4 ตัวอักษรซ่อนอยู่ระหว่างรอยต่อของสองคำนี้: "FAS**T I G E R**MY" จงค้นหาชื่อสัตว์ตัวนั้น
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 dark slate card with jungle foliage silhouettes.
  - **Visual Elements:**
    - ข้อความตัวพิมพ์ใหญ่ยาว: `" F A S T I G E R M Y "`
    - มีแว่นขยายส่องหาคำที่ซ่อนอยู่ตรงรอยต่อ
- **Solution Image Description:**
  - ตัวอักษร 4 ตัวตรงกลางสว่างวาบเป็นลายพาดกลอนเสือสีส้ม: "**T I G E R**" (เสือ)
- **Hint:** มองดูช่วงกลางคำ: FAS - **T I G E R** - MY
- **Answer:** **TIGER**
- **Accepted Answers:** `["TIGER", "tiger", "ไทเกอร์", "เสือ"]`
- **Explanation:**
  1. ในข้อความ FASTIGERMY บริเวณตรงกลางมีตัวอักษร T-I-G-E-R เรียงต่อกันพอดี
  2. ถอดได้คำว่า **TIGER** (เสือ)

---

## 22. Word Chain (`word-chain`)
- **Titles:** Word Chain | เกมต่อคำ | しりとり
- **Exercise Title:** โซ่ต่อคำชิริโทริ (Shiritori Link)
- **Prompt:** เกมต่อคำ: ตัวสุดท้ายของคำแรกจะเป็นตัวแรกของคำถัดไป จงหาคำ 3 ตัวอักษรที่มีความหมายว่า "ดวงอาทิตย์" มาเติมใน [ ? ]: `B U S` &rarr; `[ ? ]` &rarr; `N E T`
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 dark slate card.
  - **Visual Elements:**
    - โซ่เชื่อมต่อ 3 ห่วง:
      - ห่วง 1: `B U [ S ]` (เน้นตัว S ท้ายคำ)
      - ห่วง 2: `[ ? ] [ ? ] [ ? ]` (ภาพดวงอาทิตย์)
      - ห่วง 3: `[ N ] E T` (เน้นตัว N หัวคำ)
- **Solution Image Description:**
  - ห่วงตรงกลางสว่างจ้าเป็นสีทอง: "**SUN**" (ขึ้นต้นด้วย S และลงท้ายด้วย N)
- **Hint:** คำที่ขึ้นต้นด้วย S และลงท้ายด้วย N มี 3 ตัวอักษร แปลว่าพระอาทิตย์
- **Answer:** **SUN**
- **Accepted Answers:** `["SUN", "sun", "ซัน", "พระอาทิตย์", "ดวงอาทิตย์"]`
- **Explanation:**
  1. คำแรกจบด้วยตัว S (BU**S**) คำถัดไปจึงต้องขึ้นต้นด้วย **S**
  2. คำที่สามขึ้นต้นด้วยตัว N (**N**ET) คำตรงกลางจึงต้องลงท้ายด้วย **N**
  3. คำว่าดวงอาทิตย์ 3 ตัวอักษรที่ขึ้นต้นด้วย S และลงท้ายด้วย N คือ **SUN**

---

## 23. Riddles (`riddles`)
- **Titles:** Riddles | ปริศนาคำทาย | なぞなぞ
- **Exercise Title:** ปริศนาเข็มบอกเวลา (The Timeless Riddle)
- **Prompt:** "ฉันมีใบหน้าแต่ไม่มีตา มีสองเข็มคอยเดินวนเวียนแต่ไม่มีขา ฉันคืออะไร?" (ภาษาอังกฤษ 5 ตัวอักษร)
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 dark slate card with whimsical illustration.
  - **Visual Elements:**
    - กล่องปริศนาคำทายพร้อมรูปเงาของหน้าปัดวงกลมที่มีเข็มสั้นและเข็มยาว
    - ช่องเติมคำตอบ 5 ช่อง: `[ _ ] [ _ ] [ _ ] [ _ ] [ _ ]`
- **Solution Image Description:**
  - หน้าปัดนาฬิกาสีทองสว่างขึ้นพร้อมตัวอักษร: "**CLOCK**" (นาฬิกา)
- **Hint:** สิ่งของที่บอกเวลาและมีเข็มสั้นกับเข็มยาว
- **Answer:** **CLOCK**
- **Accepted Answers:** `["CLOCK", "clock", "คล็อก", "นาฬิกา"]`
- **Explanation:**
  1. ปริศนาคลาสสิก: สิ่งที่มีหน้า (face) และมีมือ/เข็ม (hands) คอยเดินบอกเวลาคือ นาฬิกา
  2. ภาษาอังกฤษ 5 ตัวอักษรคือ **CLOCK**

---

## 24. Ari–Nashi Classification (`ari-nashi`)
- **Titles:** Ari–Nashi Classification | โจทย์แบ่งกลุ่มมี–ไม่มี | あるなしクイズ
- **Exercise Title:** กฎแห่งกลุ่ม "มี" (The "Have" Rule)
- **Prompt:** ฝั่ง "มี" มีกฎลับบางอย่างซ่อนอยู่ จงสังเกตว่าคำฝั่ง "มี" เกี่ยวข้องกับหมวดหมู่อะไร: `RED`UCE (มี) vs CUT (ไม่มี), `PINK`Y (มี) vs HAND (ไม่มี)
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 card แบ่งเป็นสองคอลัมน์.
  - **Visual Elements:**
    - คอลัมน์ซ้าย [ มี (ARI) &bull; แถบสีเขียว ]:
      - **RED**UCE
      - **PINK**Y
      - **BLUE**PRINT
    - คอลัมน์ขวา [ ไม่มี (NASHI) &bull; แถบสีแดง ]:
      - CUT
      - HAND
      - DRAWING
    - คำถามด้านล่าง: "คำในฝั่ง 'มี' ซ่อนคำในหมวดใดไว้ข้างหน้า? (ภาษาอังกฤษ 5 ตัวอักษร: C _ _ _ R)"
- **Solution Image Description:**
  - คำว่า RED, PINK, BLUE ในฝั่งซ้ายสว่างเป็นสีรุ้ง และสรุปหมวดหมู่: "**COLOR**"
- **Hint:** RED (แดง), PINK (ชมพู), BLUE (ฟ้า) จัดอยู่ในหมวดหมู่อะไร?
- **Answer:** **COLOR**
- **Accepted Answers:** `["COLOR", "color", "COLOUR", "colour", "คัลเลอร์", "สี"]`
- **Explanation:**
  1. ทุกคำในฝั่ง "มี" มีชื่อสีภาษาอังกฤษซ่อนอยู่ที่ต้นคำ: **RED**uce, **PINK**y, **BLUE**print
  2. ดังนั้น สิ่งที่ซ่อนอยู่คือหมวด **COLOR** (สี)

---

## 25. Character Composition (`character-composition`)
- **Titles:** Character Composition | โครงสร้างตัวอักษร | 文字の構成
- **Exercise Title:** นับจำนวนห่วงปิด (Hole Counting)
- **Prompt:** นับจำนวน "รูหรือห่วงปิด" ในตัวอักษร: `C = 0`, `O = 1`, `B = 2` ดังนั้นคำว่า `B O O K` มีจำนวนรูรวมกันเท่ากับเท่าไร?
- **Image Description (What the image should look like):**
  - **Frame:** 520x240 dark slate card.
  - **Visual Elements:**
    - แผงตัวอย่าง:
      - ตัวอักษร **C** &rarr; 0 รู (เส้นเปิด)
      - ตัวอักษร **O** &rarr; 1 รู (วงกลมปิด)
      - ตัวอักษร **B** &rarr; 2 รู (สองห่วง)
    - คำถามด้านล่าง:
      `" B   O   O   K "  =  [ ? ] รู`
- **Solution Image Description:**
  - วงกลมสีทองไฮไลท์ที่ห่วงปิด:
    - B มี 2 รู
    - O มี 1 รู
    - O มี 1 รู
    - K มี 0 รู
  - ผลรวมคำนวณ: 2 + 1 + 1 + 0 = "**4**"
- **Hint:** B มี 2 ช่อง, O มีตัวละ 1 ช่อง, K ไม่มีช่อง นำตัวเลขมาบวกกัน
- **Answer:** **4**
- **Accepted Answers:** `["4", "สี่", "FOUR", "four"]`
- **Explanation:**
  1. ตัวอักษร B มี 2 ห่วงปิด
  2. ตัวอักษร O ตัวแรกมี 1 ห่วงปิด
  3. ตัวอักษร O ตัวที่สองมี 1 ห่วงปิด
  4. ตัวอักษร K ไม่มีห่วงปิด (0)
  5. รวมทั้งหมดคือ 2 + 1 + 1 + 0 = **4**
