<template>
  <header class="relative sticky top-0 z-50">
    <div class="bg-gray-900 py-6">
      <nav class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
        <div class="flex items-center flex-1">
          <div class="flex items-center justify-between w-full md:w-auto">
            <NuxtLink to="/">
              <span class="sr-only">Workflow</span>
              <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-teal-200-cyan-400.svg" alt="">
            </NuxtLink>
            <div class="-mr-2 flex items-center md:hidden">
              <button type="button" class="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white" aria-expanded="false" @click="openMenu">
                <span class="sr-only">Open main menu</span>
                <!-- Heroicon name: outline/menu -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          <div class="hidden space-x-8 md:flex md:ml-10 font-heading-font">
            <a v-scroll-to="'#products'" href="#" class="text-base font-bold text-white hover:text-gray-300 transform transition hover:scale-125 duration-700 ease-in-out">Products</a>

            <a href="#" class="text-base font-bold text-white hover:text-gray-300 transform transition hover:scale-125 duration-700 ease-in-out">Pricing</a>

            <a href="#" class="text-base font-bold text-white hover:text-gray-300 transform transition hover:scale-125 duration-700 ease-in-out">Blogs</a>

            <a href="#" class="text-base font-bold text-white hover:text-gray-300 transform transition hover:scale-125 duration-700 ease-in-out">Company</a>
          </div>
        </div>
        <div class="hidden md:flex md:items-center md:space-x-6">
          <a href="#" class="text-base font-medium text-white hover:text-gray-300"> Log in </a>
          <a href="#" class="transform transition hover:scale-125 duration-700 ease-in-out hover:animate-pulse active:animate-ping  inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-teal-500 to-cyan-600 hover:bg-gray-700"> Register</a>
        </div>
      </nav>
    </div>

    <!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
    <div v-if="mobileMenu" class="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
      <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div class="px-5 pt-4 flex items-center justify-between">
          <div>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-teal-500-cyan-600.svg" alt="">
          </div>
          <div class="-mr-2">
            <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600" @click="closeMenu">
              <span class="sr-only">Close menu</span>
              <!-- Heroicon name: outline/x -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div class="pt-5 pb-6">
          <div class="px-2 space-y-1">
            <a href="#" class="font-heading-font block px-3 py-2 rounded-md text-xl font-extrabold text-gray-900 hover:bg-gray-50">Products</a>

            <a href="#" class="font-heading-font block px-3 py-2 rounded-md text-xl font-extrabold text-gray-900 hover:bg-gray-50">Pricing</a>

            <a href="#" class="font-heading-font block px-3 py-2 rounded-md text-xl font-extrabold text-gray-900 hover:bg-gray-50">Blogs</a>

            <a href="#" class="font-heading-font block px-3 py-2 rounded-md text-xl font-extrabold text-gray-900 hover:bg-gray-50">Company</a>
          </div>
          <div class="mt-6 px-5">
            <a href="#" class="block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700">Register</a>
          </div>
          <div class="mt-6 px-5">
            <p class="text-center text-base font-medium text-gray-500">
              Existing customer? <a href="#" class="text-gray-900 hover:underline">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MenuBar',
  data () {
    return {
      mobileMenu: false
    }
  },
  methods: {
    closeMenu () {
      this.mobileMenu = false
    },
    openMenu () {
      this.mobileMenu = true
    }
  }
}
</script>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css';
</style>
