<script>
  import images from './assets/logo.png';
  export let Navbar = false;
  export let LoginHead = false;
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
    top: 7px;
    position: relative;
    left: 9px;
  }
</style>

<div class="main" class:Navbar class:LoginHead>
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
            <h4><strong>Smk Negeri 1 Gianyar</strong></h4>
        </div>
      </div>
    {:else}
      <p>kosong</p>
  {/if}
</div>