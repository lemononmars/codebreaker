import { describe, it, expect, vi, beforeEach } from 'vitest';
import { uploadProfilePicture } from './supabase';

// Mock the supabase client dependency
vi.mock('@supabase/supabase-js', () => {
	const mockUpload = vi.fn().mockResolvedValue({ error: null });
	const mockGetPublicUrl = vi
		.fn()
		.mockReturnValue({ data: { publicUrl: 'https://mock.url/image.jpg' } });
	const mockFrom = vi.fn().mockReturnValue({
		upload: mockUpload,
		getPublicUrl: mockGetPublicUrl
	});
	const mockCreateClient = vi.fn().mockReturnValue({
		storage: {
			from: mockFrom
		},
		auth: {},
		from: vi.fn()
	});

	return { createClient: mockCreateClient };
});

describe('uploadProfilePicture', () => {
	const mockConsoleError = vi.spyOn(console, 'error').mockImplementation(() => {
		// Do nothing
	});

	beforeEach(() => {
		mockConsoleError.mockClear();
	});

	it('should return null if file extension is missing', async () => {
		const file = new File(['dummy content'], 'no-extension');
		const result = await uploadProfilePicture('user-123', file);
		expect(result).toBeNull();
		expect(mockConsoleError).toHaveBeenCalledWith(
			'Error uploading profile picture:',
			expect.any(Error)
		);
		expect(mockConsoleError.mock.calls[0][1].message).toBe('Invalid file extension');
	});

	it('should return null if file extension is invalid', async () => {
		const file = new File(['dummy content'], 'malicious.php');
		const result = await uploadProfilePicture('user-123', file);
		expect(result).toBeNull();
		expect(mockConsoleError).toHaveBeenCalledWith(
			'Error uploading profile picture:',
			expect.any(Error)
		);
		expect(mockConsoleError.mock.calls[0][1].message).toBe('Invalid file extension');
	});

	it('should return null if userId is empty after sanitization', async () => {
		const file = new File(['dummy content'], 'image.jpg');
		const result = await uploadProfilePicture('../..', file); // "../.." sanitizes to ""
		expect(result).toBeNull();
		expect(mockConsoleError).toHaveBeenCalledWith(
			'Error uploading profile picture:',
			expect.any(Error)
		);
		expect(mockConsoleError.mock.calls[0][1].message).toBe('Invalid user ID');
	});

	it('should successfully upload if inputs are valid', async () => {
		const file = new File(['dummy content'], 'image.png');
		const result = await uploadProfilePicture('user-123', file);
		expect(result).toBe('https://mock.url/image.jpg');
		expect(mockConsoleError).not.toHaveBeenCalled();
	});

	it('should successfully upload if userId contains invalid characters but is still non-empty', async () => {
		const file = new File(['dummy content'], 'valid.png');
		// "user/123" sanitizes to "user123"
		const result = await uploadProfilePicture('user/123', file);
		expect(result).toBe('https://mock.url/image.jpg');
		expect(mockConsoleError).not.toHaveBeenCalled();
	});
});
