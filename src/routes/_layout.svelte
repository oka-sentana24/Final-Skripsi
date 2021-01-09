<script>
	import Nav from '../components/Nav.svelte';

	// export let segment;
</script>

<style>
	main {
		position: relative;
		/* max-width: 56rem; */
		background-color: white;
		padding: 1em;
		margin: 0 auto;
		box-sizing: border-box;
		overflow-x: hidden;
		overflow-y: hidden;
		height: max-content;
	}
</style>

<!-- <Nav {segment}/> -->

<main>
	<slot></slot>
</main>