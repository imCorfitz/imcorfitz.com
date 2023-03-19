<script lang="ts">
	import type { LayoutData } from './$types';
	import '../app.css';
	import PageTransition from '$lib/components/PageTransition.svelte';

	export let data: LayoutData;
</script>

<main>
	<nav class="sticky top-0">
		<a href="/">Home</a>
		<a href="/about">About</a>
	</nav>

	<PageTransition pathname={data.pathname}>
		<slot />
	</PageTransition>
</main>
