import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('discord.js', () => {
    const mockSend = vi.fn().mockResolvedValue(true);
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
		process.env.DISCORD_WEBHOOK_ID = 'test-webhook-id';
		process.env.DISCORD_WEBHOOK_TOKEN = 'test-webhook-token';

		const { sendhook } = await import('./discord');
		const { WebhookClient } = await import('discord.js');

		const message = 'test message';
		sendhook(message);

		expect(WebhookClient).toHaveBeenCalledWith({
			id: 'test-webhook-id',
			token: 'test-webhook-token'
		});
		expect(WebhookClient).toHaveBeenCalledTimes(1);

		const mockSend = vi.mocked(WebhookClient).mock.results[0].value.send;
		expect(mockSend).toHaveBeenCalledWith(message);
		expect(mockSend).toHaveBeenCalledTimes(1);
	});
});
