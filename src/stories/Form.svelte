<script>
    import images from './assets/logo.png';
    export let login = false;
    // export let Menubar = false;
  </script>
  
  <style>
    .main {
      font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      /* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
      padding: 15px 20px;
      justify-content: space-between;
    }
    .username{
      padding: 20px 0px;
    }
    input{
      border-radius: 5px;
      border: 1px solid gray;
      padding: 5px;
      width: 100%;
    }
  </style>
  
  <div class="main" class:login>
    {#if login}
        <div class="username">
            <input type="Nisn" placeholder="Nisn">
        </div>
        <div class="password">
            <input type="password" placeholder="password">
        </div>
      {/if}
  </div>