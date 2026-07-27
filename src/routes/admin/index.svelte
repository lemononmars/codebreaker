<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async () => {
		return {
			status: 302,
			redirect: '/admin/weekly'
		};
	};
</script>
