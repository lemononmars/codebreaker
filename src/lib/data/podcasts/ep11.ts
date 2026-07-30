import type { PodcastEpisodeData } from '$lib/types/podcast';

export const ep11: PodcastEpisodeData = {
  id: 'ep11',
  epNumber: 11,
  title: 'EP.11 Metapuzzle คืออะไร ? รวมข้อมูลเพื่อไขปริศนา !',
  duration: '21:00',
  hosts: 'ซูม & เฟิสท์',
  thumbnail: '/podcast/ep11.png',
  youtubeId: 'w-beijl8-z8',
  youtubeUrl: 'https://www.youtube.com/watch?v=w-beijl8-z8&list=PLKQysr88T8R9i-hKPYRy0ql5_82Kogqn9&index=11',
  summaryText: 'ใน EP.11 เจาะลึกความหมายและโครงสร้างของ Metapuzzle ปริศนาขั้นบอสที่รวบรวมคำตอบจากปริศนาย่อยทั้งหมดมาร้อยเรียงเพื่อปลดล็อกรหัสสุดท้ายของเกม',
  summaryItems: [
    {
      name: 'Metapuzzle Mechanics',
      description: 'กลไกการนำคำตอบตัวอักษรหรือคำจากโจทย์ย่อยมาร้อยเป็นประโยคหรือรหัสสุดท้าย'
    },
    {
      name: 'Meta-solving Techniques',
      description: 'เทคนิคการทำ Meta-matching แม้แก้โจทย์ย่อยยังไม่ครบทุกข้อ'
    }
  ],
  summaryTable: [
    {
      category: 'Metapuzzle Structure',
      description: 'ประเภทของ Metapuzzle ในงาน Puzzle Hunt และ Escape Room',
      examples: ['Word Extraction Meta', 'Grid Insertion Meta', 'Ordering & Indexing Meta']
    }
  ],
  references: [
    {
      category: '🎭 Puzzle Design Guides',
      links: [
        { title: 'MIT Mystery Hunt Meta Mechanics', url: 'https://www.mit.edu/~puzzle/' },
        { title: 'Codebreaker Thailand YouTube Video (EP.11)', url: 'https://www.youtube.com/watch?v=w-beijl8-z8&list=PLKQysr88T8R9i-hKPYRy0ql5_82Kogqn9&index=11' }
      ]
    }
  ],
  transcript: [
    { time: '00:00', speaker: 'Zoom', text: 'ยินดีต้อนรับสู่ EP.11 "Metapuzzle คืออะไร ? รวมข้อมูลเพื่อไขปริศนา !"' },
    { time: '05:00', speaker: 'First', text: 'หัวใจของ Puzzle Hunt หรือด่านสุดท้ายของ Escape Room ก็คือ Metapuzzle ครับ' },
    { time: '14:20', speaker: 'Zoom', text: 'มันคือการดึงตัวอักษร Indexing หรือจับคู่คำตอบจากโจทย์ย่อยเพื่อสร้างเป็นรหัสลับสุดท้าย' },
    { time: '21:00', speaker: 'First', text: 'สวัสดีครับ แล้วพบกันในตอนหน้า!' }
  ]
};
