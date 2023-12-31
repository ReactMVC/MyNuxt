<script setup lang="ts">
useHead({
    title: 'Nuxt Blog - Login',
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
    <div class="min-h-screen flex flex-col">

        <!-- Login Container -->
        <div class="flex-grow flex items-center justify-center px-6 py-8">
            <div class="w-full max-w-md">
                <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <h1 class="text-center font-bold text-3xl mb-2">Login</h1>
                        <p class="text-center text-sm text-gray-600">Access your account</p>
                    </div>
                    <form @submit.prevent="submitForm">
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Username
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username" type="text" placeholder="Username" v-model="loginForm.username">
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password" type="password" placeholder="******************" v-model="loginForm.password">
                        </div>
                        <div class="flex items-center justify-between">
                            <button
                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit">
                                Sign In
                            </button>
                            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                                href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                    <p class="text-center text-gray-500 text-xs mt-4">
                        Don't have an account? <NuxtLink class="text-blue-500 hover:text-blue-800" to="/auth/register">
                            Register</NuxtLink>
                    </p>
                </div>
            </div>
        </div>

        <!-- FAQ Section -->
        <div class="w-full max-w-md mx-auto mt-10 mb-10">
            <h2 class="text-center font-bold text-2xl mb-4">Frequently Asked Questions</h2>
            <div class="bg-white shadow-md rounded-lg overflow-hidden">
                <ul>
                    <li v-for="(item, index) in faqList" :key="index" class="border-b last:border-b-0">
                        <button
                            class="w-full text-left text-gray-700 font-medium py-4 px-6 hover:bg-gray-50 focus:outline-none transition-colors duration-300"
                            @click="toggleFaq(index)">
                            <div class="flex justify-between items-center">
                                <span>{{ item.question }}</span>
                                <i :class="item.open ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
                            </div>
                        </button>
                        <div v-if="item.open" class="text-gray-600 py-2 px-6 border-t">
                            <p class="mt-2">{{ item.answer }}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
export default {
    name: 'LoginPage',
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            },
            faqList: [
                {
                    question: 'Why do I need to login?',
                    answer: 'Logging in allows you to access personalized content and save your preferences.',
                    open: false
                },
                {
                    question: 'Why do I need to login?',
                    answer: 'Logging in allows you to access personalized content and save your preferences.',
                    open: false
                },
                {
                    question: 'Why do I need to login?',
                    answer: 'Logging in allows you to access personalized content and save your preferences.',
                    open: false
                },
            ]
        };
    },
    methods: {
        submitForm() {
            console.log('Form submitted', this.loginForm);
        },
        toggleFaq(index: number) {
            this.faqList.forEach((item, i) => {
                if (i !== index) item.open = false;
            });

            this.faqList[index].open = !this.faqList[index].open;
        }
    }
};
</script>
