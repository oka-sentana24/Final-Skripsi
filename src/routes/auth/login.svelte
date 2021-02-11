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

<main class="font-mono">
    <!-- Container -->
    <div class="container mx-auto">
        <div class="flex justify-center px-6 my-12">
            <!-- Row -->
            <div class="w-full xl:w-3/4 lg:w-11/12 flex shadow-md">
                <!-- Col -->
                <div
                    class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                    style="background-image: url('https://lh3.googleusercontent.com/proxy/9d4nTARUclEMATDZyOqBOr4D-utRzXx30RAOgl9bRCwbTy6bkFWsagnwVjq-0jtQ4aaBs3RyV9raRHl_CML4SrG78mFOAWQ4MgcF1ygw_n35wdIVuzGh61Zk-94n1dikhuHOP1U8JGPfkHY')"
                ></div>
                <!-- Col -->
                <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                    <div class="px-8 mb-4 text-center">
                        <h3 class="pt-4 mb-2 text-2xl">login</h3>
                    </div>
                    <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded-r-lg ">
                        <div class="mb-4">
                            <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                                Email
                            </label>
                            <input
                                class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Enter Email Address..."
                            />
                        </div>
                        <div class="mb-4">
                            <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                                Password
                            </label>
                            <input
                                class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Enter Email Address..."
                            />
                        </div>
                        <div class="mb-6 text-center">
                            <button
                                class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Reset Password
                            </button>
                        </div>
                        <hr class="mb-6 border-t" />
                        <div class="text-center">
                            <a
                                class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                href="./index.html"
                            >
                                Belum memiliki akun? Hubungi Pihak sekolah
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</main>
