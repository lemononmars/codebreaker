import { WebhookClient } from 'discord.js';

const webhookId = process.env.DISCORD_WEBHOOK_ID;
const webhookToken = process.env.DISCORD_WEBHOOK_TOKEN;

const webhook =
	webhookId && webhookToken
		? new WebhookClient({
				id: webhookId,
				token: webhookToken
		  })
		: null;

export function sendhook(message: string) {
	if (!webhook) {
		console.warn('Discord webhook is not configured');
		return;
	}

	webhook.send(message).catch((error) => {
		console.error('Discord webhook failed:', error);
	});
}
