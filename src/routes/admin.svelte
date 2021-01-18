<script>
    import Sidebar from "../components/Sidebar.svelte";
    import Header from "../stories/Header.svelte";
</script>
<Header LoginHead={true} />
<div class="flex">
	<div class="flex-initial ...">
	  <Sidebar></Sidebar>
	</div>
	<div class="flex-initial p-5">
		<h1>Admin</h1>
	</div>
</div>