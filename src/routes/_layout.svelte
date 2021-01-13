<script>
	import Nav from '../components/Nav.svelte';

	// export let segment;
	import { onMount } from 'svelte';
    import { goto } from '@sapper/app';
    onMount(() => goto('/auth/login'));
</script>

<style>
	
</style>

<!-- <Nav {segment}/> -->

<main>
	<slot></slot>
</main>