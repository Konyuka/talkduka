<template>
  <div class="3xl:container 2xl:mx-auto sticky top-0 z-50">
    <div class="bg-gradient-to-r from-gray-100 to-gray-200 rounded shadow-lg py-2 ">
      <nav class="flex justify-around">
        <!-- <div class="flex items-center space-x-3 lg:pr-16 pr-6">
          <img class="cursor-pointer" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-1-svg1.svg" alt="circle">
          <h2 class="font-normal text-2xl leading-6 text-gray-800">
            OvonRueden
          </h2>
        </div> -->

        <!-- For medium and plus sized devices -->
        <!-- <ul class="hidden md:flex flex-auto space-x-2">
          <li onclick="selected()" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white bg-indigo-600 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">
            Collections
          </li>
          <li onclick="selected()" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">
            Arts
          </li>
          <li onclick="selected()" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">
            Space
          </li>
          <li onclick="selected()" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">
            Game
          </li>
          <li onclick="selected()" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">
            Utility
          </li>
          <li onclick="selected()" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">
            Cards
          </li>
        </ul> -->
        <div>
          <div class="relative cursor-pointer transform transition hover:scale-125 duration-700 ease-in-out hover:text-cyan-600">
            <!-- <i class="fas fa-phone fa-lg" /> -->
            <i class="fas fa-paper-plane fa-lg" /> <span class="font-bold">info@talkduka.co.ke</span>
            <!-- <div class="animate-ping w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto duration-200" /> -->
          </div>
        </div>

        <div class="mr-4">
          <div class="relative cursor-pointer transform transition hover:scale-125 duration-700 ease-in-out hover:text-cyan-600">
            <!-- <div class="animate-ping w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto duration-200" /> -->
            <i class="fas fa-phone fa-lg" /> <span class="font-bold">+254 716 202 298</span>
          </div>
        </div>

        <!-- <div /> -->
        <div class="hidden md:flex space-x-5 justify-center items-center pl-2">
          <i class="cursor-pointer fab fa-facebook fa-lg transform transition hover:scale-125 duration-700 ease-in-out hover:text-cyan-600" />
          <i class="cursor-pointer fab fa-instagram fa-lg transform transition hover:scale-125 duration-700 ease-in-out hover:text-cyan-600" />
          <i class="cursor-pointer fab fa-twitter fa-lg transform transition hover:scale-125 duration-700 ease-in-out hover:text-cyan-600" />
          <i class="cursor-pointer fab fa-google fa-lg transform transition hover:scale-125 duration-700 ease-in-out hover:text-cyan-600" />
        </div>
      </nav>
      <!-- for smaller devcies -->
      <!-- <div class="block md:hidden w-full mt-5 ">
        <div onclick="selectNew()" class="cursor-pointer px-4 py-3 text-white bg-indigo-600 rounded flex justify-between items-center w-full">
          <div class="flex space-x-2">
            <span id="s1" class="font-semibold text-sm leading-3 hidden">Selected: </span><p id="textClicked" class="font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer ">
              Collections
            </p>
          </div>
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-1-svg4.svg" alt="down arrow">
        </div>
        <div class=" relative">
          <ul id="list" class=" hidden font-normal text-base leading-4 absolute top-2  w-full rounded shadow-md">
            <li onclick="selectedSmall()" class="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">
              Arts
            </li>
            <li onclick="selectedSmall()" class="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">
              Space
            </li>
            <li onclick="selectedSmall()" class="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">
              Game
            </li>
            <li onclick="selectedSmall()" class="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">
              Utility
            </li>
            <li onclick="selectedSmall()" class="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">
              Cards
            </li>
          </ul>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComp'
}
</script>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css';
</style>
