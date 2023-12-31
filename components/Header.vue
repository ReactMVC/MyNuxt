<template>
    <header class="bg-white shadow">
        <nav class="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
            <div class="flex justify-between items-center">
                <div class="text-xl font-semibold text-gray-700 flex items-center">
                    <a href="#" class="text-gray-800 hover:text-gray-700 md:text-2xl flex items-center">
                        <img src="~/public/favicon.ico" alt="NuxtBlog Logo" class="mr-2 h-8"> <!-- Adjust the src path, alt text, and size classes as needed -->
                        NuxtBlog
                    </a>
                </div>
                <div class="flex md:hidden">
                    <button type="button" @click="toggle"
                        class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                        aria-label="toggle menu">
                        <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                            <path v-if="isOpen" fill-rule="evenodd" clip-rule="evenodd"
                                d="M18.707 5.293a1 1 0 010 1.414L13.414 12l5.293 5.293a1 1 0 11-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 11-1.414-1.414L10.586 12 5.293 6.707A1 1 0 116.707 5.293L12 10.586l5.293-5.293a1 1 0 011.414 0z" />
                            <path v-else fill-rule="evenodd" clip-rule="evenodd"
                                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div :class="isOpen ? 'block' : 'hidden'" class="w-full md:flex md:items-center md:justify-between">
                <div class="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">

                    <NuxtLink to="/" class="my-1 text-sm leading-5 hover:text-blue-600 md:mx-4 md:my-0">Home</NuxtLink>
                    <NuxtLink to="/blog" class="my-1 text-sm leading-5 hover:text-blue-600 md:mx-4 md:my-0">Blog</NuxtLink>
                    <NuxtLink href="/" class="my-1 text-sm leading-5 hover:text-blue-600 md:mx-4 md:my-0">Contact</NuxtLink>
                </div>
                <div class="flex items-center py-2 -mx-1 md:mx-0">
                    <NuxtLink to="/auth/login"
                        class="block w-1/2 px-3 py-2 mx-1 rounded text-center text-sm font-medium leading-5 text-white bg-blue-600 hover:bg-blue-700 md:w-auto">Login</NuxtLink>
                    <NuxtLink to="/auth/register"
                        class="block w-1/2 px-3 py-2 mx-1 rounded text-center text-sm font-medium leading-5 text-blue-600 bg-transparent border border-blue-600 hover:bg-blue-600 hover:text-white md:w-auto">Register</NuxtLink>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            isOpen: false,
        };
    },
    mounted() {
        this.addEventListeners();
    },
    beforeDestroy() {
        this.removeEventListeners();
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen;
        },
        closeMenu() {
            this.isOpen = false;
        },
        addEventListeners() {
            if (process.client) {
                window.addEventListener('beforeunload', this.closeMenu);
            }
        },
        removeEventListeners() {
            if (process.client) {
                window.removeEventListener('beforeunload', this.closeMenu);
            }
        }
    },
    watch: {
        $route() {
            this.closeMenu();
        },
    },
};
</script>
