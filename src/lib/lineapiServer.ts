import line from '@line/bot-sdk';
import type { Message } from '@line/bot-sdk';

const channelAccessToken = process.env.LINE_ACCESS_TOKEN;

const client = channelAccessToken
	? new line.Client({
			channelAccessToken
	  })
	: null;

export async function reply(token: string, message: Message | Message[]) {
	if (!client) {
		console.warn('LINE client is not configured');
		return;
	}

	try {
		await client.replyMessage(token, message);
	} catch (error) {
		console.error('LINE reply failed:', error);
	}
}
