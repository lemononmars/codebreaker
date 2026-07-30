import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
  const ids = [
    'o1juoVXG6ic',
    'oTrqUbNvzzs',
    'JXeokyrRNmQ',
    '7FforKYuIRY',
    'DsiBV31hFdE',
    '-o8ih7WCiCo',
    'qriDwpJPXgM',
    'Je9qTO1IwDs',
    'RPsh6t1IP78',
    'lxDb93Bl880',
    'BcFKb5AMuQ0',
    'w-beijl8-z8',
    'HfRSmvwGxo4'
  ];

  const results: Array<{ id: string; title?: string; thumbnail?: string; error?: string }> = [];

  for (const id of ids) {
    try {
      const res = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`);
      if (res.ok) {
        const data = await res.json();
        results.push({ id, title: data.title, thumbnail: data.thumbnail_url });
      } else {
        results.push({ id, error: `HTTP ${res.status}` });
      }
    } catch (e: any) {
      results.push({ id, error: e.message });
    }
  }

  return {
    body: { results }
  };
};
