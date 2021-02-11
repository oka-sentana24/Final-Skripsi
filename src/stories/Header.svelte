<script>
  import images from './assets/logo.png';
  export let Navbar = false;
  export let LoginHead = false;
</script>

<div class="main" class:Navbar class:LoginHead>
    {#if Navbar}
      <nav class="relative select-none bg-white lg:flex lg:items-stretch w-full">
        <div class="flex flex-no-shrink items-stretch h-12 pl-5">
          <img class=" max-w-md" src={images} alt="gambar">
        </div>
        <div class="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow pr-5">
          <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
            <a href="?" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-grey-dark">English</a>
          </div>
        </div>
      </nav>
    {:else if LoginHead}
    <header class="flex flex-shrink-0">
      <div class="flex-shrink-0 px-4 py-3 bg-white w-56">
          <div class="flex items-center block w-full">
              <img class="h-8 w-8 rounded-full object-cover"
                src={images}
                alt="logo">
              <span class="ml-4 text-sm font-medium text-blue-700"><strong>SMK N 1 GIANYAR</strong></span>
          </div>
      </div>
      <div class="flex-1 flex bg-blue-700 px-6 items-center justify-between">
          <!-- <nav>
              <a href="/"
                  class="hover:bg-gray-600 rounded-lg  bg-gray-800 inline-block text-sm font-medium text-white px-3 py-2 leading-none">MailBox</a>
              <a href="/"
                  class="ml-2 hover:bg-gray-600 rounded-lg inline-block text-sm font-medium text-white px-3 py-2 leading-none">Customers</a>
              <a href="/"
                  class="hover:bg-gray-600 rounded-lg inline-block text-sm font-medium text-white px-3 py-2 leading-none">Reporting</a>
              <a href="/"
                  class="hover:bg-gray-600 rounded-lg inline-block text-sm font-medium text-white px-3 py-2 leading-none">Manage</a>
          </nav> -->
      </div>
  </header>
    {:else}
      <p>kosong</p>
  {/if}
</div>