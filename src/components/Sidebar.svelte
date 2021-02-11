<script>
    export let segment;
</script>

<div class="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
    <div class="flex items-center space-x-4 p-2 mb-5">
    <img class="h-12 rounded-full" src="http://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="James Bhatta">
    <div>
        <h4 class="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">James Bhatta</h4>
        <span class="text-sm tracking-wide flex items-center space-x-1">
            <svg class="h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg><span class="text-gray-600">Verified</span>
        </span>
    </div>
    </div>
    <ul class="flex flex-col py-4">
    <li>
        <a aria-current="{segment === undefined ? 'page' : undefined}" href="." class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-home"></i></span>
        <span class="text-sm font-medium">Dashboard</span>
        </a>
    </li>
    <li>
        <a aria-current="{segment === 'siswa' ? 'page' : undefined}" href="siswa" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-music"></i></span>
        <span class="text-sm font-medium">Kelola Siswa</span>
        </a>
    </li>
    <li>
        <a aria-current="{segment === 'guru' ? 'page' : undefined}" href="guru" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-drink"></i></span>
        <span class="text-sm font-medium">Kelola Guru</span>
        </a>
    </li>
    <li>
        <a aria-current="{segment === 'jurusan' ? 'page' : undefined}" href="jurusan" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-shopping-bag"></i></span>
        <span class="text-sm font-medium">Kelola Jurusan</span>
        </a>
    </li>
    <li>
        <a aria-current="{segment === 'topik' ? 'page' : undefined}" href="topik" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-chat"></i></span>
        <span class="text-sm font-medium">Kelola Topik</span>
        </a>
    </li>
    <li>
        <a aria-current="{segment === 'user' ? 'page' : undefined}" href="user" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-user"></i></span>
        <span class="text-sm font-medium">Kelola User</span>
        </a>
    </li>
    <li>
        <a aria-current="{segment === 'profile' ? 'page' : undefined}" href="profile" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-bell"></i></span>
        <span class="text-sm font-medium">Profile</span>
        <span class="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
        </a>
    </li>
    <li>
        <a aria-current="{segment === 'report' ? 'page' : undefined}" href="report" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-bell"></i></span>
        <span class="text-sm font-medium">Report</span>
        <span class="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
        </a>
    </li>
    <li>
        <a href="/" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-log-out"></i></span>
        <span class="text-sm font-medium">Logout</span>
        </a>
    </li>
    </ul>
</div>
