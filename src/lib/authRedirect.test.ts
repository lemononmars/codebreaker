import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { authRedirectUrl } from './authRedirect';

describe('authRedirectUrl', () => {
    let originalWindow: any;

    beforeEach(() => {
        originalWindow = global.window;
        global.window = {
            location: {
                origin: 'https://example.com'
            }
        } as any;
    });

    afterEach(() => {
        global.window = originalWindow;
    });

    it('should use /profile as default path', () => {
        expect(authRedirectUrl()).toBe('https://example.com/profile');
    });

    it('should use the provided path', () => {
        expect(authRedirectUrl('/dashboard')).toBe('https://example.com/dashboard');
    });

    it('should handle paths without leading slash properly', () => {
        expect(authRedirectUrl('settings')).toBe('https://example.com/settings');
    });
});
