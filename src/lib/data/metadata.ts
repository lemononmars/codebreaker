import { getImageURL } from '$lib/supabase';

export const puzzleDescriptions = [
    {
        type: "adventure",
        description: "ตะลุยด่านไขรหัส",
        icon: getImageURL('assets', 'adventure.png')
    },
    {
        type: "rebus",
        description: "ทายคำจากภาพ",
        icon: getImageURL('assets', 'rebus.png')
    },
    {
        type: "crossword",
        description: "ปริศนาอักษรไขว้",
        icon: getImageURL('assets', 'crossword.png')
    },
    {
        type: "alphabet",
        description: "ทายคำจากคำใบ้ โดยเปิดตัวอักษรให้น้อยที่สุด",
        icon: getImageURL('assets', 'alphabet.png')
    },
    {
        type: "spellingbee",
        description: "หาคำ 7 ตัวอักษร",
        icon: getImageURL('assets', 'spellingbee.png')
    },
    {
        type: "puzzlehunt",
        description: "แก้ชุดปริศนา",
        icon: getImageURL('assets', 'puzzlehunt.png')
    },
    {
        type: "weekly",
        description: "ปริศนาประจำสัปดาห์บนเพจ fb",
        icon: getImageURL('assets', 'adventure.png')
    },
    {
        type: "missingvowels",
        description: "ทายคำโดยใช้แค่พยัญชนะ",
        icon: getImageURL('assets', 'missing.png')
    },
    {
        type: "cryptogram",
        description: "ทายคำจากรหัสอักษร",
        icon: getImageURL('assets', 'cryptogram.png')
    },
    {
        type: "crossroad",
        description: "เติมคำเพื่อสร้างคำทั้งสี่ทิศทาง",
        icon: getImageURL('assets', 'crossroad.png')
    },
    {
        type: "spellingquiz",
        description: "เกมสะกดคำไทย ทายคำสะกดที่ถูกต้องของคำที่คนมักเขียนผิดบ่อยที่สุด",
        icon: getImageURL('assets', 'spellingbee.png')
    }
];

export interface ShopProduct {
    url: string;
    title: string;
    description: string;
    imgUrl: string;
    price: number;
    shipping: number;
    badge?: string;
    category?: string;
    puzzlesCount?: string;
    format?: string;
    refParam?: string;
}

export interface ShopComingSoonProduct {
    title: string;
    description: string;
    imgUrl?: string;
    category: string;
    badge: string;
    expected?: string;
}

export const shopBundleDeal = {
    title: "Code Breaker Ultimate Puzzle Bundle",
    subtitle: "ครบเซ็ต 3 ชิ้น (การ์ดเกม Vol.1 + หนังสือ Logic Contest + หนังสือ Rebus)",
    originalPrice: 480,
    bundlePrice: 400,
    shippingText: "ส่งฟรีทั่วประเทศ",
    refParam: "order_bundle"
};

export const shopProductDescriptions: ShopProduct[] = [
    {
        url: 'carddeck/vol1',
        title: "Puzzle Card Deck Vol.1",
        description: "ปริศนาการ์ด 18 ใบ พร้อม 1 Meta Puzzle พิเศษ",
        imgUrl: 'puzzle_card_deck_vol1.jpg',
        price: 150,
        shipping: 30,
        badge: "การ์ดเกมขายดี",
        category: "Card Game",
        puzzlesCount: "18 ปริศนา (17 Classic + 1 Meta)",
        format: "การ์ดเกม 18 ใบ พร้อมกล่อง",
        refParam: "order_deck_vol1"
    },
    {
        url: 'logiccontestbook',
        title: "Code Breaker Logic Puzzle Contest Book",
        description: "รวบรวมโจทย์ทั้งหมดจากงานแข่ง พร้อมโจทย์พิเศษ 40 ข้อ รวม 85 ปริศนา (เนื้อหาภาษาอังกฤษล้วน)",
        imgUrl: 'logic_puzzle_contest_book_cover.jpg',
        price: 150,
        shipping: 30,
        badge: "85+ ข้อ • English",
        category: "Logic Puzzle",
        puzzlesCount: "85 ปริศนา (Logic & Variety)",
        format: "หนังสือ A5 พร้อมเฉลยละเอียด",
        refParam: "order_logiccontestbook"
    },
    {
        url: 'rebusbook',
        title: "Rebus Puzzle Book",
        description: "ปริศนาอักษรแทนคำภาษาไทย 100 ข้อ พร้อมคำใบ้และเฉลยในตัว",
        imgUrl: 'rebus_book_cover.jpg',
        price: 100,
        shipping: 20,
        badge: "100 ข้อจุใจ",
        category: "Word Puzzle",
        puzzlesCount: "100 ปริศนาคำไทย",
        format: "หนังสือพกพา A6 (1 หน้าต่อ 1 ข้อ)",
        refParam: "order_rebusbook"
    },
];

export const shopComingSoonProducts: ShopComingSoonProduct[] = [
    {
        title: "Puzzle Card Deck Vol.2",
        description: "ภาคต่อชุดการ์ดปริศนา มาพร้อมธีมและลูกเล่นใหม่สุดท้าทาย",
        category: "Card Game",
        badge: "Coming Soon",
        expected: "เร็ว ๆ นี้"
    },
    {
        title: "Puzzle Card Deck Vol.3",
        description: "ชุดการ์ดปริศนาระดับความยากเข้มข้น ออกแบบมาสำหรับแฟนพันธุ์แท้",
        category: "Card Game",
        badge: "Coming Soon",
        expected: "เร็ว ๆ นี้"
    },
    {
        title: "Code Breaker Logic Contest Book Vol. 2",
        description: "รวมสุดยอดโจทย์แข่ง Logic Puzzle Contest ซีซั่นใหม่พร้อมโจทย์พิเศษ",
        category: "Logic Puzzle",
        badge: "Coming Soon",
        expected: "เร็ว ๆ นี้"
    }
];

export const shopImgUrlPrefix = 'https://raw.githubusercontent.com/lemononmars/codebreaker/main/src/lib/images/product/';

