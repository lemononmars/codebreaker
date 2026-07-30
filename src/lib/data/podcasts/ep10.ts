import type { PodcastEpisodeData } from '$lib/types/podcast';

export const ep10: PodcastEpisodeData = {
  id: 'ep10',
  epNumber: 10,
  title: 'EP.10 ควันหลงงาน TBS 2021 และเบื้องหลังสุดว้าว !',
  duration: '18:50',
  hosts: 'ซูม & เฟิสท์',
  thumbnail: '/podcast/ep10.png',
  youtubeId: 'BcFKb5AMuQ0',
  youtubeUrl: 'https://www.youtube.com/watch?v=BcFKb5AMuQ0&list=PLKQysr88T8R9i-hKPYRy0ql5_82Kogqn9&index=10',
  summaryText: 'ใน EP.10 เก็บตกควันหลงงาน Thailand Board Game Show (TBS 2021) เผยเบื้องหลังการจัดกิจกรรมแก้ปริศนาสุดว้าว บรรยากาศภายในงาน และการตอบรับจากคอบอร์ดเกมไทย',
  summaryItems: [
    {
      name: 'TBS 2021 Highlights',
      description: 'ภาพรวมความประทับใจ การเปิดตัวเกมใหม่ และการแข่งขันไขปริศนาในงาน Thailand Board Game Show'
    },
    {
      name: 'Behind The Scenes',
      description: 'เรื่องราวเบื้องหลังของทีมงานในการเตรียมระบบ อุปกรณ์ และโจทย์ปริศนาสำหรับผู้เข้าร่วมงาน'
    }
  ],
  summaryTable: [
    {
      category: 'TBS Event Highlights',
      description: 'ไฮไลต์จากงานบอร์ดเกมระดับประเทศ',
      examples: ['Live Puzzle Quest', 'Board Game Showcase', 'Creator Talk']
    }
  ],
  references: [
    {
      category: '🧩 Event Archives',
      links: [
        { title: 'Thailand Board Game Show Updates', url: 'https://codebreaker.in.th' },
        { title: 'Codebreaker Thailand YouTube Video (EP.10)', url: 'https://www.youtube.com/watch?v=BcFKb5AMuQ0&list=PLKQysr88T8R9i-hKPYRy0ql5_82Kogqn9&index=10' }
      ]
    }
  ],
  transcript: [
    { time: '00:00', speaker: 'Zoom', text: 'สวัสดีครับ EP.10 ควันหลงงาน TBS 2021 และเบื้องหลังสุดว้าว !' },
    { time: '02:30', speaker: 'First', text: 'งาน TBS 2021 เป็นอีกหนึ่งก้าวสำคัญที่คอบอร์ดเกมและคนรักปริศนามารวมตัวกันเยอะมากครับ' },
    { time: '10:45', speaker: 'Zoom', text: 'เบื้องหลังทีมงานต้องเตรียมโจทย์และทดสอบระบบกันข้ามคืนเพื่อให้ผู้เข้าร่วมงานสนุกที่สุด' },
    { time: '18:50', speaker: 'First', text: 'พบกันใหม่ตอนหน้าครับ สวัสดีครับ' }
  ]
};
