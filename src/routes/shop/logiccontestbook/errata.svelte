<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async () => ({
		status: 301,
		redirect: '/shop/logiccontestbook1/errata'
	});
</script>
