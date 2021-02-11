<script>
    export let segment;
    import test from "../../routes/form/siswainput.svelte"
</script>
<section class="text-gray-600 body-font md:overflow-hidden font-mono">
    <div class="p-6 mx-auto">
        <div class="flex">
            <div class="flex flex-col text-left w-full">
                <h2 class="text-2xl text-gray-900"><strong>Kelola Siswa</strong></h2>
            </div>
            <div class="flex flex-col text-left max-w-5xl pr-5">
                <a rel=prefetch aria-current="{segment === 'siswainput' ? 'page' : undefined}" href="/form/siswainput" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline justify-end w-full">
                   New Siswa
                </a>
            </div>
        </div>
        <div class="flex flex-wrap justify-center mt-3 border-t border-gray-400 pt-4  md:overflow-x-scroll">
            <table class="w-full text-md bg-white shadow-md rounded mb-4 max-w-screen-full">
                <tbody>
                    <tr class="border-b">
                        <th class="text-left p-3 px-5">ID</th>
                        <th class="text-left p-3 px-5">Nis</th>
                        <th class="text-left p-3 px-5">Nama</th>
                        <th class="text-left p-3 px-5">Alamat</th>
                        <th class="text-left p-3 px-5">Phone</th>
                        <th class="text-left p-3 px-5">Tempat_Lahir</th>
                        <!-- <th class="text-left p-3 px-5">Tanggal_Lahir</th> -->
                        <!-- <th class="text-left p-3 px-5">Jenis_Kelamin</th> -->
                        <!-- <th class="text-left p-3 px-5">Agama</th>
                        <th class="text-left p-3 px-5">Hobi</th>
                        <th class="text-left p-3 px-5">Ayah</th>
                        <th class="text-left p-3 px-5">Ibu</th> -->
                        <th></th>
                    </tr>
                    <tr class="border-b hover:bg-orange-100 bg-gray-100">
                        <td class="p-3 px-5"><input type="text" value="1" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="Jack denil" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="Jack denil" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="Jack denil" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="Jack denil" class="bg-transparent"></td>
                        <td class="p-3 px-5">
                            <select value="user.role" class="bg-transparent">
                                <option value="user">user</option>
                                <option value="admin">admin</option>
                            </select>
                        </td>
                        <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                    </tr>
                    <tr class="border-b hover:bg-orange-100">
                        <td class="p-3 px-5"><input type="text" value="2" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="user.email" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="Jack denil" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="Jack denil" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="Jack denil" class="bg-transparent"></td>
                        <td class="p-3 px-5">
                            <select value="user.role" class="bg-transparent">
                                <option value="user">user</option>
                                <option value="admin">admin</option>
                            </select>
                        </td>
                        <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                    </tr>
                    
                    <tr class="border-b hover:bg-orange-100">
                        <td class="p-3 px-5"><input type="text" value="3" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="user.email" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="Jack denil" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="Jack denil" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="Jack denil" class="bg-transparent"></td>
                        <td class="p-3 px-5">
                            <select value="user.role" class="bg-transparent">
                                <option value="user">user</option>
                                <option value="admin">admin</option>
                            </select>
                        </td>
                        <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                    </tr>
                    <tr class="border-b hover:bg-orange-100 bg-gray-100">
                        <td class="p-3 px-5"><input type="text" value="4" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="user.email" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="Jack denil" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="Jack denil" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="Jack denil" class="bg-transparent"></td>
                        <td class="p-3 px-5">
                            <select value="user.role" class="bg-transparent">
                                <option value="user">user</option>
                                <option value="admin">admin</option>
                            </select>
                        </td>
                        <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                    </tr>
                    <tr class="border-b hover:bg-orange-100">
                        <td class="p-3 px-5"><input type="text" value="5" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="user.email" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="Jack denil" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="Jack denil" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="Jack denil" class="bg-transparent"></td>
                        <td class="p-3 px-5">
                            <select value="user.role" class="bg-transparent">
                                <option value="user">user</option>
                                <option value="admin">admin</option>
                            </select>
                        </td>
                        <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                    </tr>
                    <tr class="border-b hover:bg-orange-100 bg-gray-100">
                        <td class="p-3 px-5"><input type="text" value="6" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="user.email" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="Jack denil" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="Jack denil" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="Jack denil" class="bg-transparent"></td>
                        <td class="p-3 px-5">
                            <select value="user.role" class="bg-transparent">
                                <option value="user">user</option>
                                <option value="admin">admin</option>
                            </select>
                        </td>
                        <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                    </tr>
                    <tr class="border-b hover:bg-orange-100">
                        <td class="p-3 px-5"><input type="text" value="7" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="user.email" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="Jack denil" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="Jack denil" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="Jack denil" class="bg-transparent"></td>
                        <td class="p-3 px-5">
                            <select value="user.role" class="bg-transparent">
                                <option value="user">user</option>
                                <option value="admin">admin</option>
                            </select>
                        </td>
                        <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                    </tr>
                    <tr class="border-b hover:bg-orange-100">
                        <td class="p-3 px-5"><input type="text" value="8" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="user.email" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="Jack denil" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="Jack denil" class="bg-transparent"></td>
                        <td class="p-3 px-5"><input type="text" value="Jack denil" class="bg-transparent"></td>
                        <td class="p-3 px-5">
                            <select value="user.role" class="bg-transparent">
                                <option value="user">user</option>
                                <option value="admin">admin</option>
                            </select>
                        </td>
                        <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>

