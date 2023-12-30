<script setup lang="ts">
useHead({
  title: 'Nuxt Blog - Blog Page',
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

<template>
  <div class="min-h-screen bg-gray-100 py-10">
    <div class="container mx-auto px-4">
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="p-8">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p class="text-gray-600">Welcome to my blog. Here you'll find the latest updates and articles.</p>
        </div>
        <!-- Blog posts will be listed here -->
        <div class="p-8">
          <!-- Example of a blog post card -->
          <div class="mb-8">
            <div class="mb-4">
              <h2 class="text-2xl font-semibold text-gray-800">Title of the Blog Post</h2>
              <p class="text-gray-500 text-sm">Published on July 20, 2023</p>
            </div>
            <div class="text-gray-700">
              <p>This is a summary of the blog post. It should give readers an idea of what the post is about without giving everything away.</p>
            </div>
            <div class="mt-4">
              <a href="#" class="text-indigo-600 hover:text-indigo-500 transition duration-300">Read more →</a>
            </div>
          </div>

          <div class="mb-8">
            <div class="mb-4">
              <h2 class="text-2xl font-semibold text-gray-800">Title of the Blog Post</h2>
              <p class="text-gray-500 text-sm">Published on July 20, 2023</p>
            </div>
            <div class="text-gray-700">
              <p>This is a summary of the blog post. It should give readers an idea of what the post is about without giving everything away.</p>
            </div>
            <div class="mt-4">
              <a href="#" class="text-indigo-600 hover:text-indigo-500 transition duration-300">Read more →</a>
            </div>
          </div>

          <div class="mb-8">
            <div class="mb-4">
              <h2 class="text-2xl font-semibold text-gray-800">Title of the Blog Post</h2>
              <p class="text-gray-500 text-sm">Published on July 20, 2023</p>
            </div>
            <div class="text-gray-700">
              <p>This is a summary of the blog post. It should give readers an idea of what the post is about without giving everything away.</p>
            </div>
            <div class="mt-4">
              <a href="#" class="text-indigo-600 hover:text-indigo-500 transition duration-300">Read more →</a>
            </div>
          </div>
          <!-- Repeat for other blog posts -->
        </div>
      </div>
    </div>
  </div>
</template>