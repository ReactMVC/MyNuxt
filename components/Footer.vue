<template>
  <footer class="bg-gray-100 border-t border-gray-200">
    <div
      class="container mx-auto px-4 py-8 md:py-12 lg:flex lg:justify-between lg:items-center"
    >
      <div class="lg:flex lg:items-center">
        <div class="mb-6 lg:mb-0 lg:mr-12">
          <h3 class="text-gray-800 text-lg font-semibold">About NuxtBlog</h3>
          <p class="mt-2 text-gray-600 text-sm">
            Your go-to source for tech news, tutorials, and more.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:block">
          <div class="mb-6">
            <h3 class="text-gray-800 text-lg font-semibold">Quick Links</h3>
            <NuxtLink
              to="/"
              class="block mt-2 text-sm text-gray-600 hover:text-blue-500"
              >Home</NuxtLink
            >
            <NuxtLink
              to="/blog"
              class="block mt-2 text-sm text-gray-600 hover:text-blue-500"
              >Blog</NuxtLink
            >
            <NuxtLink
              to="/contact"
              class="block mt-2 text-sm text-gray-600 hover:text-blue-500"
              >Contact</NuxtLink
            >
          </div>
          <div>
            <h3 class="text-gray-800 text-lg font-semibold">Resources</h3>
            <a
              href="#"
              class="block mt-2 text-sm text-gray-600 hover:text-blue-500"
              >Support</a
            >
            <a
              href="#"
              class="block mt-2 text-sm text-gray-600 hover:text-blue-500"
              >Privacy Policy</a
            >
            <a
              href="#"
              class="block mt-2 text-sm text-gray-600 hover:text-blue-500"
              >Terms of Service</a
            >
          </div>
        </div>
      </div>
      <div class="mt-8 lg:mt-0">
        <div class="flex justify-center lg:justify-end mb-4">
          <!-- Social media icons -->
          <a href="#" class="text-gray-600 hover:text-gray-500 mx-2">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-500 mx-2">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-500 mx-2">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-500 mx-2">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p class="text-gray-600 text-sm text-center lg:text-right">
          © 2023 NuxtBlog. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
