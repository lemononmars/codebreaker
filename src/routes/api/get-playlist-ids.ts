import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
  try {
    const res = await fetch('https://www.youtube.com/playlist?list=PLKQysr88T8R9i-hKPYRy0ql5_82Kogqn9', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9,th;q=0.8'
      }
    });
    const html = await res.text();

    const matches = Array.from(html.matchAll(/"videoId":"([A-Za-z0-9_-]{11})"/g));
    const uniqueIds = Array.from(new Set(matches.map(m => m[1])));

    return {
      body: {
        count: uniqueIds.length,
        ids: uniqueIds
      }
    };
  } catch (err: any) {
    return {
      body: { error: err.message }
    };
  }
};
