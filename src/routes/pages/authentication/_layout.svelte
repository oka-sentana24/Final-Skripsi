<script>
    import Login from "./login.svelte";
    import Navbar from "../../../stories/Header.svelte";
    export let segment;
</script>

<main>
    <div class="container mx-auto">
        <Navbar Navbar={true}/>
        {#if segment === 'login'}
            <Login />
        {/if}
    </div>
</main>
<style>
    main{
        overflow-x: hidden;
        overflow-y: hidden;
    }
</style>