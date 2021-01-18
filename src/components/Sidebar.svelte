<script>
    import Card from "../stories/Card.svelte";
    import Header from "../stories/Header.svelte";
</script>

<main class="Sidebar">
    <Header LoginHead={true}/>
    <div class="content">
        <Card CardSide={true}>
           <input class="search" type="text" placeholder="search">
        </Card>
    </div>
</main>

<style>
    .Sidebar{
        padding: 0;
    }
    .search{
        border: 1px solid;
        padding: 0px 10px;
    }

</style>