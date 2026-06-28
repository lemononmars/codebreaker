import { describe, it, expect, vi, beforeEach } from 'vitest';
import { uploadProfilePicture } from './supabase';
import { supabaseClient } from './supabase';

vi.mock('@supabase/supabase-js', () => {
    return {
        createClient: vi.fn(() => ({
            storage: {
                from: vi.fn().mockReturnThis(),
                upload: vi.fn(),
                getPublicUrl: vi.fn()
            },
            auth: {},
            from: vi.fn()
        }))
    }
});

describe('uploadProfilePicture', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should handle upload error and return null', async () => {
    // We can spy on console.error
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    // Mock upload to return an error
    const mockError = new Error('Upload failed');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (supabaseClient.storage.from('profile-pictures').upload as any).mockResolvedValue({ error: mockError });

    const mockFile = new File([''], 'test.png', { type: 'image/png' });

    const result = await uploadProfilePicture('user123', mockFile);

    expect(result).toBeNull();
    expect(consoleSpy).toHaveBeenCalledWith('Error uploading profile picture:', mockError);

    consoleSpy.mockRestore();
  });

  it('should handle success and return url', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (supabaseClient.storage.from('profile-pictures').upload as any).mockResolvedValue({ error: null });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (supabaseClient.storage.from('profile-pictures').getPublicUrl as any).mockReturnValue({
        data: { publicUrl: 'https://example.com/image.png' }
    });

    const mockFile = new File([''], 'test.png', { type: 'image/png' });

    const result = await uploadProfilePicture('user123', mockFile);

    expect(result).toBe('https://example.com/image.png');
  });
});
