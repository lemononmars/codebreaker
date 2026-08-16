import { WebhookClient } from 'discord.js';

function getWebhook(): WebhookClient | null {
	const webhookUrl = process.env.DISCORD_WEBHOOK_URL || process.env.VITE_DISCORD_WEBHOOK_URL;
	if (webhookUrl) {
		return new WebhookClient({ url: webhookUrl });
	}

	const webhookId = process.env.DISCORD_WEBHOOK_ID || process.env.VITE_DISCORD_WEBHOOK_ID;
	const webhookToken = process.env.DISCORD_WEBHOOK_TOKEN || process.env.VITE_DISCORD_WEBHOOK_TOKEN;

	if (webhookId && webhookToken) {
		return new WebhookClient({
			id: webhookId,
			token: webhookToken
		});
	}

	return null;
}

export function sendhook(message: string) {
	const webhook = getWebhook();
	if (!webhook) {
		console.warn('Discord webhook is not configured');
		return;
	}

	const res = webhook.send(message);
	if (res && typeof res.catch === 'function') {
		res.catch((error) => {
			console.error('Discord webhook failed:', error);
		});
	}
}
