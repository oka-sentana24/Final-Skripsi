<script>
  import images from './assets/logo.png';
  export let Navbar = false;
  export let LoginHead = false;
  export let Menubar = false;
</script>

<style>
  .main {
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo{
  width: 50px;
  height: 50px;
  }
  .text-xs{
  font-size: small;
  }
  .logo-dasboars{
    float: left;
  }
  .content-title{
    width: 100%;
  }
  .content-title h4{
    top: -17px;
    position: relative;
    left: 9px;
  }
  .menubar{
    padding: 0;
    width: 20%;
  }
  .menubar li:hover{
    background-color: black;
    color: white;
  }
  .menubar li{
    list-style-type: none;
    padding: 5px;
  }
  .content li{
    padding: 5px 5px 5px 20px;
  }
  
</style>

<div class="main" class:Navbar class:LoginHead class:Menubar>
  {#if Navbar}
      <div>
        <img class="logo" src={images} alt="gambar">
      </div>
      <div>
        <p class="text-xs">English (US)</p>
      </div>
    {:else if LoginHead}
      <div>
        <div class="logo-dasboars">
          <img class="logo" src={images} alt="gambar">
        </div>
        <div class="content-title">
            <h4>Smk Negeri 1 Gianyar</h4>
        </div>
      </div>
    {:else if Menubar}
      <div class="menubar text-xs">
        <div>
          <h4><strong>Menu</strong></h4>
        </div>
        <div>
          <li>DASBOARD</li>
        </div>
        <li>MATER DATA</li>
          <div class="content">
            <li>Anggota</li>
            <li>Jurusan</li>
            <li>Guru</li>
            <li>Topik</li>
          </div>
        <li>USER</li>
          <div class="content">
            <li>Admin</li>
            <li>Teacher</li>
            <li>Siswa</li>
          </div>
        <li>REPORT</li>
      </div>
    {:else}
      <div>
        <p>kosong</p>
      </div>
    {/if}
</div>