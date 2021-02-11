<script>
    export let segment;
</script>
<div class="flex flex-col">
    <div class="flex-1 flex overflow-x-hidden">
        <div class="w-56 p-6"> 
            <ul class="flex flex-col">
                <li>
                    <a aria-current="{segment === undefined ? 'page' : undefined}" href="." class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <!-- <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                        <i class="fa fa-home" aria-hidden="true"></i>
                    </span> -->
                    <span class="text-sm font-medium">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a aria-current="{segment === 'siswa' ? 'page' : undefined}" href="siswa" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <!-- <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                        <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                    </span> -->
                    <span class="text-sm font-medium">Kelola Siswa</span>
                    </a>
                </li>
                <li>
                    <a aria-current="{segment === 'guru' ? 'page' : undefined}" href="guru" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <!-- <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-drink"></i></span> -->
                    <span class="text-sm font-medium">Kelola Guru</span>
                    </a>
                </li>
                <li>
                    <a aria-current="{segment === 'jurusan' ? 'page' : undefined}" href="jurusan" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <!-- <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-shopping-bag"></i></span> -->
                    <span class="text-sm font-medium">Kelola Jurusan</span>
                    </a>
                </li>
                <li>
                    <a aria-current="{segment === 'topik' ? 'page' : undefined}" href="topik" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <!-- <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-chat"></i></span> -->
                    <span class="text-sm font-medium">Kelola Topik</span>
                    </a>
                </li>
                <li>
                    <a aria-current="{segment === 'user' ? 'page' : undefined}" href="user" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <!-- <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-user"></i></span> -->
                    <span class="text-sm font-medium">Kelola User</span>
                    </a>
                </li>
                <li>
                    <a aria-current="{segment === 'profile' ? 'page' : undefined}" href="profile" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <!-- <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-bell"></i></span> -->
                    <span class="text-sm font-medium">Profile</span>
                    <span class="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
                    </a>
                </li>
                <li>
                    <a aria-current="{segment === 'report' ? 'page' : undefined}" href="report" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <!-- <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-bell"></i></span> -->
                    <span class="text-sm font-medium">Report</span>
                    <span class="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
                    </a>
                </li>
                <li>
                    <a href="/" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <!-- <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-log-out"></i></span> -->
                    <span class="text-sm font-medium">Logout</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
