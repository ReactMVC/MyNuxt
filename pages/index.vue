<script setup lang="ts">
useHead({
  title: 'Nuxt Blog',
  meta: [
    { name: 'description', content: 'My Blog.' }
  ],
  link: [
    { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" },
  ],
});

definePageMeta({
  layout: "default",
});
</script>

<script lang="ts">
export default {
  name: 'Home',
  data() {
    return {
      services: [
        {
          id: 1,
          title: 'Web Development',
          description: 'Building responsive and dynamic websites.',
          image: 'http://localhost:3000/_nuxt/public/favicon.ico'
        },
        {
          id: 1,
          title: 'API Development',
          description: 'Building fast and modern apis.',
          image: 'http://localhost:3000/_nuxt/public/favicon.ico'
        },
      ]
    };
  }
};
</script>

<template>
  <div class="min-h-screen bg-gray-100">

    <!-- Website Name and Subtitle -->
    <section class="text-center py-10">
      <h1 class="text-4xl font-bold text-gray-800">Nuxt Blog</h1>
      <p class="text-xl text-gray-600 mt-2">my web app</p>
    </section>

    <!-- Search Form -->
    <section class="flex justify-center items-center py-10">
      <form class="w-full max-w-xl">
        <div class="flex items-center border-b border-blue-500 py-2">
          <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="What are you looking for?" aria-label="Search">
          <button class="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded transition-colors duration-200" type="button">
            Search
          </button>
        </div>
      </form>
    </section>

    <!-- Services Cards -->
    <section class="px-6 py-10">
      <div class="flex flex-wrap -mx-4 justify-center">
        <!-- Repeat this div for each service card -->
        <div v-for="service in services" :key="service.id" class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img :src="service.image" :alt="service.title">
            <div class="p-6">
              <h2 class="font-bold text-xl mb-2">{{ service.title }}</h2>
              <p class="text-gray-700 text-base">{{ service.description }}</p>
            </div>
          </div>
        </div>
        <!-- End of service card -->
      </div>
    </section>

    <!-- Team Card -->
    <section class="bg-white py-10">
      <div class="max-w-4xl mx-auto px-6">
        <div class="bg-gray-200 rounded-lg shadow-lg p-6 flex items-center">
          <img class="w-16 h-16 rounded-full mr-6" src="~/assets/images/team.jpeg" alt="Team member">
          <div>
            <h2 class="font-bold text-lg">Hossein Pira</h2>
            <p class="text-gray-600">Nuxt Developer</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>