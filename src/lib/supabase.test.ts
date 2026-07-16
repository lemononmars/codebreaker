import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('@supabase/supabase-js', () => {
  return {
    createClient: vi.fn().mockReturnValue({
      auth: {},
      storage: {
        from: vi.fn()
      }
    })
  };
});

import { getImageURL, getPuzzleImageURL, supabaseClient } from './supabase';

describe('supabase utils', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('getImageURL', () => {
    it('returns the public URL when successful', () => {
      const getPublicUrlMock = vi.fn().mockReturnValue({ data: { publicUrl: 'https://example.com/mocked_url' } });
      const fromMock = vi.mocked(supabaseClient.storage.from).mockReturnValue({
        getPublicUrl: getPublicUrlMock,
      } as any);

      const url = getImageURL('puzzles', 'my-image.png');

      expect(fromMock).toHaveBeenCalledWith('puzzles');
      expect(getPublicUrlMock).toHaveBeenCalledWith('my-image.png');
      expect(url).toBe('https://example.com/mocked_url');
    });

    it('returns undefined when data is missing', () => {
      const getPublicUrlMock = vi.fn().mockReturnValue({ data: null });
      const fromMock = vi.mocked(supabaseClient.storage.from).mockReturnValue({
        getPublicUrl: getPublicUrlMock,
      } as any);

      const url = getImageURL('events', 'missing.png');

      expect(fromMock).toHaveBeenCalledWith('events');
      expect(getPublicUrlMock).toHaveBeenCalledWith('missing.png');
      expect(url).toBeUndefined();
    });
  });

  describe('getPuzzleImageURL', () => {
    it('returns the correct public URL for a puzzle image', () => {
      const getPublicUrlMock = vi.fn().mockReturnValue({ data: { publicUrl: 'https://example.com/mocked_puzzle_url' } });
      const fromMock = vi.mocked(supabaseClient.storage.from).mockReturnValue({
        getPublicUrl: getPublicUrlMock,
      } as any);

      const url = getPuzzleImageURL('typeA', 'fileB.png');

      expect(fromMock).toHaveBeenCalledWith('puzzles');
      expect(getPublicUrlMock).toHaveBeenCalledWith('typeA/fileB.png');
      expect(url).toBe('https://example.com/mocked_puzzle_url');
    });
  });
});
