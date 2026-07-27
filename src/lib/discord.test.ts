import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('discord.js', () => {
    const mockSend = vi.fn();
	return {
		WebhookClient: vi.fn(() => ({
			send: mockSend
		}))
	};
});

describe('discord.ts', () => {
	beforeEach(() => {
		vi.resetModules();
        vi.clearAllMocks();
	});

	it('initializes WebhookClient with env variables and sends a message', async () => {
        // Dynamic import so discord.ts is loaded after the mock setup is complete
        const { sendhook } = await import('./discord');
        const { WebhookClient } = await import('discord.js');

        // Check initialization
        expect(WebhookClient).toHaveBeenCalledWith({
            id: 'test-webhook-id',
            token: 'test-webhook-token'
        });
        expect(WebhookClient).toHaveBeenCalledTimes(1);

		const message = 'test message';
		sendhook(message);

        const mockSend = vi.mocked(WebhookClient).mock.results[0].value.send;
        expect(mockSend).toHaveBeenCalledWith(message);
        expect(mockSend).toHaveBeenCalledTimes(1);
	});
});
