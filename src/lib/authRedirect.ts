export function authRedirectUrl(path = '/profile') {
	return new URL(path, window.location.origin).toString();
}
