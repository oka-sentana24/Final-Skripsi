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
    <img  class="background-img w-full" src={Images} alt="Background">
    <div class="card">
        <Card main>
            <div class="content-login h-64 grid grid-rows-1 grid-flow-col gap-2">
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
                            <div class="p-5 text-center">
                                Reset Pasword? Hubungi Pihak Sekolah
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
    /* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

    @media (min-width: 1281px) {
        .background-img{
        border-radius: 1.25em;
        object-fit: cover;
        min-height: 100px;
        max-height: 500px;
        background-position: center;  
       }
        .card{
            position: relative;
            display: block;
            bottom: 300px;
            left: 300px;
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
        width:100%;
        }
        .logo{
        width: 50%;
        position: relative;
        left: 25%;
        }
    
    }
/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  
    .background-img{
        border-radius: 1.25em;
        object-fit: cover;
        min-height: 100px;
        max-height: 500px;
        background-position: center;  
       }
        .card{
            position: relative;
            display: block;
            bottom: 300px;
            left: 150px;
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
        width:100%;
        }
        .logo{
        width: 50%;
        position: relative;
        left: 25%;
        }
  
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  
    .background-img{
        border-radius: 1.25em;
        object-fit: cover;
        min-height: 100px;
        max-height: 500px;
        background-position: center;  
       }
        .card{
            position: relative;
            display: block;
            bottom: 300px;
            left: 150px;
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
        width:100%;
        }
        .logo{
        width: 50%;
        position: relative;
        left: 25%;
        }
  
}

/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  
    .background-img{
        border-radius: 1.25em;
        object-fit: cover;
        min-height: 100px;
        max-height: 500px;
        background-position: center;  
       }
        .card{
            position: relative;
            display: block;
            bottom: 300px;
            left: 33px;
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
        width:100%;
        }
        .logo{
        width: 50%;
        position: relative;
        left: 25%;
        }
  
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  
    .background-img{
        border-radius: 1.25em;
        object-fit: cover;
        min-height: 100px;
        max-height: 500px;
        background-position: center;  
       }
        .card{
            position: relative;
            display: block;
            bottom: 300px;
            left: 0px;
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
        width:100%;
        }
        .logo{
        width: 50%;
        position: relative;
        left: 25%;
        }
  
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  
    .background-img{
        visibility: hidden;
       }
    .card{
        position: absolute;
        display: block;
        top :50px;
        padding: 30px;
    }
    .content-login{
        display:contents;
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
    width:100%;
    }
    .logo{
    width: 50%;
    position: relative;
    left: 25%;
    }
    .login{
        padding-top: 20px;
    }
    .login h1{
        text-align: center;
    }
}
</style>