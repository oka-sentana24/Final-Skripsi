<script>
	import Sidebar from "../stories/Sidebar.svelte";
	import Header from "../stories/Header.svelte";
	import Content from "../components/Content/dasboard.svelte";
</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<main>
	<div class="w-full z-20 fixed">
		<Header LoginHead={true}></Header>
	</div>
	<!-- <section class=" flex min-h-screen">
		<div class=" flex-shrink h-screen bg-gray-100 pt-20 w-56 fixed">
			<Sidebar></Sidebar>
		</div>
		<div class=" flex-shrink h-screen pt-20 w-full ml-56">
			<Content></Content>
		</div>
	</section> -->
</main>
