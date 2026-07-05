import { createClient } from '@supabase/supabase-js';

type SupaStorageBucket = 'puzzles' | 'events' | 'assets';
const DIR_IMAGE = 'https://ojjggolcfmjnovmipaav.supabase.in/storage/v1/object/';
export const DEFAULT_WEEKLY_IMAGE_URL = DIR_IMAGE + 'weekly/placeholder.png';

export const supabaseClient = createClient(
	String(import.meta.env.VITE_SUPABASE_URL),
	String(import.meta.env.VITE_SUPABASE_ANON_KEY)
);

/**
 * Convenience re-exports for typed selections
 *
 */
export const auth = supabaseClient.auth;
export const storage = supabaseClient.storage;

/**
 *
 * @param table The Supabase table to act upon
 * @returns {data, error}
 */
export const from = (table: string) => supabaseClient.from(table);
/**
 *
 * @param bucket The Supabase storage bucket to act upon
 * @returns url
 */
export const fromBucket = (bucket: SupaStorageBucket) => supabaseClient.storage.from(bucket);

export function getImageURL(type: SupaStorageBucket, url: string) {
	return fromBucket(type).getPublicUrl(url).data?.publicUrl;
}

export function getPuzzleImageURL(type: string, filename: string) {
	return getImageURL('puzzles', type + '/' + filename);
}

export async function uploadProfilePicture(userId: string, file: File): Promise<string | null> {
	try {
<<<<<<< HEAD
		const allowedTypes = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif']);
		if (!allowedTypes.has(file.type)) {
			throw new Error('Unsupported image type');
		}

		const fileExt = file.name.split('.').pop();
		const fileName = `${userId}-${Date.now()}.${fileExt}`;
		const filePath = `${userId}/${fileName}`;
=======
		// Sanitize userId to prevent path traversal
		const sanitizedUserId = userId.replace(/[^a-zA-Z0-9-]/g, '');
		if (!sanitizedUserId) {
			throw new Error('Invalid user ID');
		}

		// Validate and sanitize file extension
		const fileExt = file.name.split('.').pop()?.toLowerCase();
		const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
		if (!fileExt || !allowedExtensions.includes(fileExt)) {
			throw new Error('Invalid file extension');
		}

		const fileName = `${sanitizedUserId}-${Date.now()}.${fileExt}`;
		const filePath = `${sanitizedUserId}/${fileName}`;
>>>>>>> 42220a430d2e5b35a90c69952393aeacd19acfce

		const { error: uploadError } = await supabaseClient.storage
			.from('profile-pictures')
			.upload(filePath, file, { upsert: true });

		if (uploadError) throw uploadError;

		const { data } = supabaseClient.storage.from('profile-pictures').getPublicUrl(filePath);

		return data.publicUrl;
	} catch (error) {
		console.error('Error uploading profile picture:', error);
		return null;
	}
}
