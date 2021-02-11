<script>
    export let segment;
    import Navbar from "../../stories/Header.svelte";
</script>
<main>
    <div class="container mx-auto">
        <Navbar Navbar={true}></Navbar>
    </div>
    {#if segment === "login"}
        <slot></slot>
    {/if}
</main>
<style>
    main{
        height: 70vh;
    }
</style>
