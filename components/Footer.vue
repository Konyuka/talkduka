<template>
  <footer class="bg-gray-50" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">
      Footer
    </h2>
    <div class="max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8 xl:col-span-1">
          <img class="h-10" src="https://tailwindui.com/img/logos/workflow-mark-gray-300.svg" alt="Company name">
          <p class="text-gray-500 text-base font-bold">
            Your One Stop Talk Shop
          </p>
          <div class="flex space-x-6">
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">Facebook</span>
              <i class="fab fa-facebook fa-lg" />
            </a>

            <a href="#" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">Instagram</span>
              <i class="fab fa-instagram fa-lg" />
            </a>

            <a href="#" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">Twitter</span>
              <i class="fab fa-twitter fa-lg" />
            </a>

            <a href="#" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">Google</span>
              <i class="fab fa-google fa-lg" />
            </a>
          </div>
        </div>
        <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div class="mt-12 md:mt-0">
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Support
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li>
                  <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Pricing </a>
                </li>

                <li>
                  <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Documentation </a>
                </li>

                <li>
                  <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Guides </a>
                </li>

                <li>
                  <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Contacts </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="hidden md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Company
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li>
                  <a href="#" class="text-base text-gray-500 hover:text-gray-900"> About </a>
                </li>

                <li>
                  <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Blog </a>
                </li>

                <li>
                  <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Jobs </a>
                </li>

                <li>
                  <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Partners </a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Legal
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li>
                  <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Claim </a>
                </li>

                <li>
                  <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Privacy </a>
                </li>

                <li>
                  <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Terms </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 border-t border-gray-200 py-8">
        <p class="text-base text-gray-400 xl:text-center">
          <!-- &copy; 2022 Talk Duka. All rights reserved. -->
          Developed with <i class="fas fa-heart text-red-400" /> by <span class="text-red-600 font-extrabold underline font-saibas-font text-lg">  Saiba </span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComp'
}
</script>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css';
</style>
