<script>
    import Card from "../stories/Card.svelte";
   
    export let segment;
</script>
<Card CardSide={true}>
    <input class="search" type="text" placeholder="search">
    <div class="side text-sm">
        <ul class="menu">
            <li><a aria-current="{segment === undefined ? 'page' : undefined}" href="."><strong>Dasboard</strong></a></li>
            <li><strong>Master Data</strong></li>
            <ul>
                <li><a class="link" aria-current="{segment === 'anggota' ? 'page' : undefined}" href="anggota">Anggota</a></li>
                <li><a class="link" aria-current="{segment === 'jurusan' ? 'page' : undefined}" href="jurusan">Jurusan</a></li>
                <li><a class="link" aria-current="{segment === 'guru' ? 'page' : undefined}" href="guru">Guru</a></li>
                <li><a class="link" aria-current="{segment === 'topik' ? 'page' : undefined}" href="topik">Topik</a></li>
            </ul>
            <li><strong>User</strong></li>
            <ul>
                <li><a class="link" aria-current="{segment === 'admin' ? 'page' : undefined}" href="admin">Admin</a></li>
                <li><a class="link" aria-current="{segment === 'guru' ? 'page' : undefined}" href="guru">Teacher</a></li>
                <li><a class="link" aria-current="{segment === 'siswa' ? 'page' : undefined}" href="siswa">Siswa</a></li>
            </ul>
            <li><a aria-current="{segment === 'report' ? 'page' : undefined}" href="report"><strong>Report</strong></a></li>
        </ul>
    </div>
</Card>
<style>
    .search{
        border: 1px solid;
        padding: 0px 10px;
    }
    .menu{
        padding-top: 20px;
    }
    .menu li{
        padding: 10px;
    }
    li:hover{
        background: gray;
    }
    .link{
        padding-left: 20px;
    }


</style>