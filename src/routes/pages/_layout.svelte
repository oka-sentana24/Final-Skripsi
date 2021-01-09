<script>
	export let segment;
  </script>
  
  {#if segment === 'authentication'}
	<div id="layoutAuthentication" class="bg-primary">
	  <div id="layoutAuthentication_content">
		<main>
			<slot></slot>
		</main>
	  </div>
	</div>
  {:else}
	<div id="layoutError">
	  <div id="layoutError_content">
		<main>
			<slot></slot>
		</main>
	  </div>
	</div>
  {/if}
<style>
    main{
        overflow-x: hidden;
    }
</style>
  