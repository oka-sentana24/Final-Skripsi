<script>
	import Sidebar from "../components/Sidebar.svelte";
	import Header from "../stories/Header.svelte";
</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<main>
	<!-- <div class="grid grid-rows-2 grid-flow-col gap-2">
		<div class="row-span-3 ..."><Sidebar></Sidebar></div>
		<div class="col-span-2 ...">2</div>
	</div> -->
	<Header LoginHead={true} />
	<div class="flex">
		<div class="flex-initial ...">
		  <Sidebar></Sidebar>
		</div>
		<div class="flex-initial p-5 w-full">
		</div>
	</div>
</main>