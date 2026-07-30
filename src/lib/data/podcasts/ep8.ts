import type { PodcastEpisodeData } from '$lib/types/podcast';

export const ep8: PodcastEpisodeData = {
  id: 'ep8',
  epNumber: 8,
  title: 'EP.8 โควิดทำให้ต้องปรับ เกมปริศนารับมือยังไง !',
  duration: '25:10',
  hosts: 'ซูม & เฟิสท์',
  thumbnail: '/podcast/ep8.png',
  youtubeId: 'RPsh6t1IP78',
  youtubeUrl: 'https://www.youtube.com/watch?v=RPsh6t1IP78&list=PLKQysr88T8R9i-hKPYRy0ql5_82Kogqn9&index=8',
  summaryText: 'ใน EP.8 พูดคุยถึงผลกระทบและการปรับตัวของวงการเกมไขปริศนาในช่วงโควิด การย้ายประสบการณ์จากหน้าร้าน físicas สู่ระบบออนไลน์ และนวัตกรรม Escape Room รูปแบบใหม่',
  summaryItems: [
    {
      name: 'Digital Transformation',
      description: 'การปรับเปลี่ยน Escape Room และบอร์ดเกมสู่ระบบ Online Live Hosting ผ่าน Zoom และ Discord'
    },
    {
      name: 'Print & Play Movement',
      description: 'กระแสบอร์ดเกมปริศนาแบบดาวน์โหลด พิมพ์ใส่กระดาษ แล้วเล่นได้ทันทีที่บ้าน'
    }
  ],
  summaryTable: [
    {
      category: 'Online Escape Rooms',
      description: 'การควบคุม avatar หรือสตรีมมิงห้องจริงผ่านกล้อง',
      examples: ['Remote Avatar Escape Room', 'Virtual Detective Game']
    }
  ],
  references: [
    {
      category: '🌐 Online Escape Platforms',
      links: [
        { title: 'Room Escape Artist Remote Games', url: 'https://roomescapeartist.com/' },
        { title: 'Codebreaker Thailand YouTube Video (EP.8)', url: 'https://www.youtube.com/watch?v=RPsh6t1IP78&list=PLKQysr88T8R9i-hKPYRy0ql5_82Kogqn9&index=8' }
      ]
    }
  ],
  transcript: [
    { time: '00:00', speaker: 'Zoom', text: 'ยินดีต้อนรับสู่ EP.8 กับหัวข้อ "โควิดทำให้ต้องปรับ เกมปริศนารับมือยังไง !"' },
    { time: '03:40', speaker: 'First', text: 'ช่วงโควิดเป็นช่วงที่อุตสาหกรรม Escape Room หน้าร้านต้องปรับตัวอย่างหนักมาสู่แพลตฟอร์มออนไลน์ครับ' },
    { time: '15:00', speaker: 'Zoom', text: 'ทำให้เกิดนวัตกรรม Remote Avatar Escape Room ที่ให้ผู้เล่นสั่งการคนจริงในห้องผ่านกล้องวงจรปิด!' },
    { time: '25:00', speaker: 'First', text: 'ขอบคุณครับ แล้วพบกันในตอนหน้า!' }
  ]
};
