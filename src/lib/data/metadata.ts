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
    }
];

export const shopProductDescriptions = [
    {
        url: 'carddeck/vol1',
        title: "Puzzle Card Deck Vol.1",
        description: "ปริศนาการ์ด 18 ใบ",
        imgUrl: 'puzzle_card_deck_vol1.jpg',
    },
    {
        url: 'logiccontestbook',
        title: "Code Breaker Logic Puzzle Contest Book",
        description: "ปริศนาจากงาน Logic Puzzle Contest",
        imgUrl: 'logic_puzzle_contest_book_cover.jpg'
    },
    {
        url: 'rebusbook',
        title: "Rebus Puzzle Book",
        description: "หนังสือปริศนาอักษรแทนคำ",
        imgUrl: 'rebus_book_cover.jpg'
    },
];

export const shopImgUrlPrefix = 'https://raw.githubusercontent.com/lemononmars/codebreaker/main/src/lib/images/product/';
