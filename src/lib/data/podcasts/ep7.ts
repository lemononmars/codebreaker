import type { PodcastEpisodeData } from '$lib/types/podcast';

export const ep7: PodcastEpisodeData = {
  id: 'ep7',
  epNumber: 7,
  title: 'EP.7 แคมเปญเกมปริศนา ที่พีคยิ่งกว่าพีค !!',
  duration: '21:45',
  hosts: 'ซูม & เฟิสท์',
  thumbnail: '/podcast/ep7.png',
  youtubeId: 'Je9qTO1IwDs',
  youtubeUrl: 'https://www.youtube.com/watch?v=Je9qTO1IwDs&list=PLKQysr88T8R9i-hKPYRy0ql5_82Kogqn9&index=7',
  summaryText: 'ใน EP.7 พาไปวิเคราะห์แคมเปญการตลาดที่นำเกมไขปริศนามาใช้สร้างความฮือฮาและกระแสไวรัล ปรากฏการณ์ที่พีคยิ่งกว่าพีคเมื่อแบรนด์ยักษ์ใหญ่ใช้ปริศนาสื่อสารกับผู้บริโภค',
  summaryItems: [
    {
      name: 'Viral Puzzle Marketing',
      description: 'กลยุทธ์สร้างแคมเปญโฆษณาด้วยปริศนา ดึงดูดให้ผู้บริโภคช่วยกันค้นหาคำตอบและแชร์ต่อ'
    },
    {
      name: 'Case Studies',
      description: 'ตัวอย่างแคมเปญสุดพีคในต่างประเทศและประเทศไทยที่ประสบความสำเร็จถล่มทลาย'
    }
  ],
  summaryTable: [
    {
      category: 'Interactive Campaigns',
      description: 'แคมเปญโฆษณาที่ใช้ปริศนาสร้างการมีส่วนร่วมกับลูกค้า',
      examples: ['ARG Product Reveal', 'Hidden Message Billboard', 'Secret Website Launch']
    }
  ],
  references: [
    {
      category: '📢 Campaign References',
      links: [
        { title: 'Codebreaker Thailand Official Site', url: 'https://codebreaker.in.th' },
        { title: 'Codebreaker Thailand YouTube Video (EP.7)', url: 'https://www.youtube.com/watch?v=Je9qTO1IwDs&list=PLKQysr88T8R9i-hKPYRy0ql5_82Kogqn9&index=7' }
      ]
    }
  ],
  transcript: [
    { time: '00:00', speaker: 'Zoom', text: 'สวัสดีครับ ยินดีต้อนรับเข้าสู่ EP.7 แคมเปญเกมปริศนา ที่พีคยิ่งกว่าพีค !!' },
    { time: '02:10', speaker: 'First', text: 'วันนี้เราจะมาคุยกันถึงแคมเปญการตลาดที่ใช้เกมไขปริศนามาเป็นลูกเล่นหลักในการดึงดูดผู้คนครับ' },
    { time: '12:30', speaker: 'Zoom', text: 'ความสนุกคือมันไม่ได้มีแค่ในจอ แต่ขยายไปตามป้ายโฆษณา และสื่อสังคมออนไลน์' },
    { time: '21:30', speaker: 'First', text: 'แล้วพบกัน EP ถัดไปนะครับ สวัสดีครับ' }
  ]
};
