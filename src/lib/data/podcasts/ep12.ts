import type { PodcastEpisodeData } from '$lib/types/podcast';

export const ep12: PodcastEpisodeData = {
  id: 'ep12',
  epNumber: 12,
  title: 'EP.12 จะเริ่มลงมือทำเกมปริศนา ต้องเริ่มจากตรงไหน !?',
  duration: '27:15',
  hosts: 'ซูม & เฟิสท์',
  thumbnail: 'https://i.ytimg.com/vi/HfRSmvwGxo4/hqdefault.jpg',
  youtubeId: 'HfRSmvwGxo4',
  youtubeUrl: 'https://www.youtube.com/watch?v=HfRSmvwGxo4&list=PLKQysr88T8R9i-hKPYRy0ql5_82Kogqn9&index=13',
  summaryText: 'ใน EP.12 ตอนส่งท้ายซีซัน สองผู้ดำเนินรายการพาไปเจาะลึกขั้นตอนการเริ่มลงมือสร้างสรรค์และวางโครงสร้างเกมไขปริศนา จากไอเดียแรกตั้งต้น สู่การทดสอบระบบและการส่งมอบประสบการณ์ให้ผู้เล่น',
  summaryItems: [
    {
      name: 'Ideation & Core Loop',
      description: 'จุดเริ่มต้นการออกแบบปริศนา การกำหนดเป้าหมายหลัก และกลไกการเล่น'
    },
    {
      name: 'Playtesting & Iteration',
      description: 'การทดสอบเกมกับผู้เล่นจริงเพื่อปรับสมดุลความยากและขจัดจุดติดขัด'
    }
  ],
  summaryTable: [
    {
      category: 'Puzzle Game Creation Steps',
      description: 'ขั้นตอนหลักในการสร้างสรรค์เกมไขปริศนา',
      examples: ['1. Concept & Theme', '2. Mechanics & Flowchart', '3. Prototyping & Playtest']
    }
  ],
  references: [
    {
      category: '🌐 Codebreaker Thailand Portal',
      links: [
        { title: 'Codebreaker Thailand Official Site', url: 'https://codebreaker.in.th' },
        { title: 'Codebreaker Thailand YouTube Video (EP.12)', url: 'https://www.youtube.com/watch?v=HfRSmvwGxo4&list=PLKQysr88T8R9i-hKPYRy0ql5_82Kogqn9&index=13' }
      ]
    }
  ],
  transcript: [
    { time: '00:00', speaker: 'Zoom', text: 'ยินดีต้อนรับสู่ EP.12 ตอนส่งท้ายกับหัวข้อ "จะเริ่มลงมือทำเกมปริศนา ต้องเริ่มจากตรงไหน !?"' },
    { time: '03:15', speaker: 'First', text: 'หลายคนอยากสร้างเกมปริศนาของตัวเอง แต่มักไม่แน่ใจว่าจะเริ่มตั้งต้นจากไอเดียหรือกลไกก่อนดี' },
    { time: '14:20', speaker: 'Zoom', text: 'คำแนะนำแรกคือ ให้เริ่มจากผลลัพธ์ที่คุณอยากให้ผู้เล่นรู้สึก แล้วย้อนกลับมาดีไซน์โจทย์และคำใบ้ครับ' },
    { time: '27:15', speaker: 'First', text: 'ขอบคุณผู้ฟังทุกคนที่ติดตาม Codebreaker Podcast มาตลอดซีซันนะครับ สวัสดีครับ!' }
  ]
};
