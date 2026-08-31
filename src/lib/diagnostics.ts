export type DiagnosticLevel = 'info' | 'warn' | 'error';

export function recordDiagnostic(
	event: string,
	attributes: Record<string, unknown> = {},
	level: DiagnosticLevel = 'info'
): void {
	const entry = JSON.stringify({
		event,
		level,
		timestamp: new Date().toISOString(),
		...attributes
	});
	if (level === 'error') console.error(entry);
	else if (level === 'warn') console.warn(entry);
	else console.info(entry);
}
