const thaiDateFormatter = new Intl.DateTimeFormat('th-TH-u-ca-buddhist', {
	timeZone: 'Asia/Bangkok',
	day: 'numeric',
	month: 'long',
	year: 'numeric'
});

export function dateToThaiString(date: string) {
	const parsed = new Date(date);

	if (Number.isNaN(parsed.getTime())) {
		return date;
	}

	return thaiDateFormatter.format(parsed);
}

export function todayDateThaiString() {
	return dateToThaiString(new Date(Date.now()).toISOString());
}
