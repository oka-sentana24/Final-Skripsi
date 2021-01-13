<script>
    import Card from "../../stories/Card.svelte";
    import Images from "../../../static/background.jpg"
    import Button from "../../stories/Button.svelte";
    import Logo from '../../../static/logo.png';
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
                        <form action="">
                            <div class="username">
                                <input class="w-full" type="text" placeholder="username">
                            </div>
                            <div class="password">
                                <input class="w-full" type="password" placeholder="username">
                            </div>
                            <div class="btn">
                                <Button Primary={true}>Submite</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Card> 
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