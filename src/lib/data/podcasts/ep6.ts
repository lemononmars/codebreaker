import type { PodcastEpisodeData } from '$lib/types/podcast';

export const ep6: PodcastEpisodeData = {
  id: 'ep6',
  epNumber: 6,
  title: 'EP.6 เหมือนหลุดเข้าไปอีกโลก กับบอร์ดเกมไขปริศนา !',
  duration: '23:50',
  hosts: 'ซูม & เฟิสท์',
  thumbnail: '/podcast/ep6.png',
  youtubeId: 'qriDwpJPXgM',
  youtubeUrl: 'https://www.youtube.com/watch?v=qriDwpJPXgM&list=PLKQysr88T8R9i-hKPYRy0ql5_82Kogqn9&index=6',
  summaryText: 'ใน EP.6 ดำดิ่งสู่โลกของบอร์ดเกมสายไขปริศนาและสืบสวนสอบสวน เปลี่ยนโต๊ะกินข้าวที่บ้านให้กลายเป็นฉากอาชญากรรม คดีปริศนา และห้องทดลองลับ',
  summaryItems: [
    {
      name: 'Legacy & One-time Play',
      description: 'เสน่ห์บอร์ดเกมเล่นครั้งเดียว ตัด พับ ฉีก อุปกรณ์จริงเพื่อประสบการณ์ขั้นสุด'
    },
    {
      name: 'App-Integrated Board Games',
      description: 'ผสานการ์ดจริงเข้ากับระบบแอปมือถือ ตรวจสอบรหัส เสียงประกอบ และเวลาจำกัด'
    }
  ],
  summaryTable: [
    {
      category: 'Escape Room Board Games',
      description: 'เน้นจำกัดเวลา ถอดรหัส 4 หลัก และไขปริศนาทีละขั้น',
      examples: ['Exit: The Game', 'Unlock!', 'Deckscape']
    },
    {
      category: 'Detective & Crime Investigation',
      description: 'เน้นอ่านสำนวนคดี ชันสูตร และเชื่อมโยงผู้ต้องสงสัย',
      examples: ['Detective: A Modern Crime Board Game', 'Chronicles of Crime', 'Sherlock Holmes Consulting Detective']
    }
  ],
  references: [
    {
      category: '🎲 Board Game Geek Links',
      links: [
        { title: 'Chronicles of Crime (BGG)', url: 'https://boardgamegeek.com/boardgame/239188/chronicles-crime' },
        { title: 'Sherlock Holmes Consulting Detective (BGG)', url: 'https://boardgamegeek.com/boardgame/2511/sherlock-holmes-consulting-detective-the-thames-m' },
        { title: 'Codebreaker Thailand YouTube Video (EP.6)', url: 'https://www.youtube.com/watch?v=qriDwpJPXgM&list=PLKQysr88T8R9i-hKPYRy0ql5_82Kogqn9&index=6' }
      ]
    }
  ],
  transcript: [
    { time: '00:00', speaker: 'Zoom', text: 'สวัสดีครับ EP.6 กับเรื่องราวของบอร์ดเกมไขปริศนาที่ทำให้เราเหมือนหลุดเข้าไปอีกโลก' },
    { time: '01:40', speaker: 'First', text: 'ปัจจุบันบอร์ดเกมไขปริศนาไปไกลมาก ทั้งการใช้ AR, แอปพลิเคชันประกอบ และพร็อปสมจริง' },
    { time: '11:20', speaker: 'Zoom', text: 'อย่าง Chronicles of Crime เราใช้แอปสแกน QR code บนการ์ดเพื่อสืบเบาะแสในที่เกิดเหตุ 360 องศา!' },
    { time: '23:40', speaker: 'First', text: 'ใครอยากเริ่มเล่น แนะนำให้ลอง Unlock! หรือ Exit กันดูนะครับ สวัสดีครับ' }
  ]
};
