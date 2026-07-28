export async function get({ params }: { params: { id: string } }) {
	const { id } = params;
	return {
		body: { id }
	};
}
