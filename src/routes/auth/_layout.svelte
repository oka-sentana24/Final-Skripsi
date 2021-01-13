<script>
    export let segment;
    import Navbar from "../../stories/Header.svelte";
</script>

<div class="container mx-auto">
    <Navbar Navbar={true}></Navbar>
    {#if segment === "login"}
        <slot></slot>
    {/if}
</div>