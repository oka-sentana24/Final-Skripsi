<script>
    import Card from "../../stories/Card.svelte";
    import Images from "../../../static/background.jpg"
    import Button from "../../stories/Button.svelte";
    import Logo from '../../../static/logo.png';
    import { goto } from '@sapper/app';
    let password = "";
    let username = "";
    let error;
  
    const handleLogin = async () => {
      const response = await fetch("/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      console.log("bali",response);
      if (response.ok){
        goto('/');
      }
    };
</script>

<main class="contents">
    <img  class="images" src={Images} alt="Background">
    <div class="card">
        <Card main>
            <div class="h-64 grid grid-rows-1 grid-flow-col gap-2">
                <div>
                    <!-- <div class="title">
                        <h1 class="text-2xl">Forum Diskusi</h1>
                        <h1 class="text-2xl text-blue-700">SMK NEGERI 1 GIANYAR</h1>
                    </div> -->
                    <img  class="logo" src={Logo} alt="Background">
                    <div class="content text-center p-3">
                        <h1 class='text-lg'><strong>FORUM DISKUSI</strong></h1>
                        <h1 class='text-lg text-blue-700'><strong>SMK NEGERI 1 GIANYAR</strong></h1>
                    </div>
                </div>
                <div>
                    <div class="login">
                        <h1 class="text-2xl">Login</h1>
                    </div>
                    <div class="content-form">
                        <form on:submit|preventDefault="{handleLogin}" method="post">
                            <div class="username">
                                <input class="w-full" type="text" placeholder="username" bind:value="{username}"/>
                            </div>
                            <div class="password">
                                <input class="w-full" type="password" placeholder="passowrd" bind:value="{password}">
                            </div>
                            <div class="btn">
                                <Button Primary={true}>Submite</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Card>
        {#if error}
        <p>{error}</p>
        {/if} 
    </div>
</main>

<style>
    .images{
        border-radius: 1.25em;
        object-fit: cover;
        width: 100%;
        height: 70vh;
        background-position: center; 
    }
    .card{
        position: absolute;
        bottom: 68px;
        display: inline-block;
        left: 450px;
    }
    .username{
        padding: 20px 0px;
    }
    .password{
        padding: 20px 0px;
    }
    input{
        padding: 5px;
        border-radius: 5px;
        border: 0.75px solid gray;
    }
    .btn{
        padding: 20px 0px;  
    }
    .logo{
        width: 50%;
        position: relative;
        left: 20%;
    }
    
</style>