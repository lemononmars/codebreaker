import type { PodcastEpisodeData } from '$lib/types/podcast';

export const ep9: PodcastEpisodeData = {
  id: 'ep9',
  epNumber: 9,
  title: 'EP.9 เกมไขปริศนาสุดล้ำ นำไปใช้งานอะไรได้บ้าง?',
  duration: '26:00',
  hosts: 'ซูม & เฟิสท์',
  thumbnail: '/podcast/ep9.png',
  youtubeId: 'lxDb93Bl880',
  youtubeUrl: 'https://www.youtube.com/watch?v=lxDb93Bl880&list=PLKQysr88T8R9i-hKPYRy0ql5_82Kogqn9&index=9',
  summaryText: 'ใน EP.9 เจาะลึกการนำเกมไขปริศนาไปประยุกต์ใช้ในสายงานต่างๆ ทั้งการศึกษา Gamification การคัดเลือกบุคลากร (HR Recruitment) เทรนนิ่งในองค์กร และการสร้างทีม (Team Building)',
  summaryItems: [
    {
      name: 'Educational Gamification',
      description: 'เปลี่ยนบทเรียนที่น่าเบื่อให้กลายเป็นภารกิจไขรหัสเพื่อสร้างความจดจำและกระตุ้นการเรียนรู้'
    },
    {
      name: 'Corporate Team Building',
      description: 'การประเมินภาวะผู้นำ การสื่อสาร และการแก้ปัญหาร่วมกันในองค์กรผ่านกิจกรรมปริศนา'
    }
  ],
  summaryTable: [
    {
      category: 'Corporate & HR Use Cases',
      description: 'การประยุกต์ใช้เกมไขปริศนาในองค์กรธุรกิจ',
      examples: ['Assessment Center', 'Onboarding Quest', 'Leadership Training']
    }
  ],
  references: [
    {
      category: '🔍 Gamification References',
      links: [
        { title: 'Codebreaker Corporate Services', url: 'https://codebreaker.in.th' },
        { title: 'Codebreaker Thailand YouTube Video (EP.9)', url: 'https://www.youtube.com/watch?v=lxDb93Bl880&list=PLKQysr88T8R9i-hKPYRy0ql5_82Kogqn9&index=9' }
      ]
    }
  ],
  transcript: [
    { time: '00:00', speaker: 'Zoom', text: 'ยินดีต้อนรับสู่ EP.9 กับหัวข้อ "เกมไขปริศนาสุดล้ำ นำไปใช้งานอะไรได้บ้าง?"' },
    { time: '04:00', speaker: 'First', text: 'หลายคนคิดว่าเกมปริศนามีไว้แค่เล่นสนุกๆ แต่จริงๆ มันถูกนำไปใช้ใน HR การฝึกอบรม และการศึกษาเยอะมากครับ' },
    { time: '16:30', speaker: 'Zoom', text: 'การเห็นพฤติกรรมคนในภาวะกดดันเวลาไขปริศนา บอกทักษะการทำงานเป็นทีมได้อย่างแม่นยำมาก' },
    { time: '26:00', speaker: 'First', text: 'แล้วพบกัน EP ถัดไปนะครับ!' }
  ]
};
