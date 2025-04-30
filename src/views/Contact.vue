<template>
    <div class="w-full h-full">
        <!-- Header -->
        <Header />
        <!-- Navbar -->
        <Navbar />
        <!-- Title Section -->
        <TitleSection title="Habarlaşmak" isBorder />
        <!-- Main -->
        <div class="container py-10 pb-20">
            <div class="flex items-start">
                <!-- Form Bölümü -->
                <form class="w-3/5 space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-40">
                        <input type="text" placeholder="Doly adyňyz" class="w-full border-b border-black focus:outline-none" />
                        <input type="text" placeholder="Telefon belgiňiz" class="w-full border-b border-black focus:outline-none" />
                        <input type="email" placeholder="Elektron salgyňyz" class="w-full border-b border-black focus:outline-none" />
                        <input type="text" placeholder="Habarlaşmak" class="w-full border-b border-black focus:outline-none" />
                    </div>
                    <button type="submit"
                        class="bg-sky-500 hover:bg-sky-600 text-white font-medium px-8 py-3 rounded-full flex items-center gap-2">
                        UGRATMAK
                        <span>→</span>
                    </button>
                </form>

                <!-- Bilgi Bölümü -->
                <div class="pl-40 space-y-6 text-sm text-gray-800">
                    <div>
                        <p class="font-medium">Elektron salgymyz</p>
                        <a href="mailto:arkach@gmail.com" class="text-sky-500 hover:underline">arkach@gmail.com</a>
                    </div>
                    <div>
                        <p class="font-medium">Marketing</p>
                        <a href="mailto:marketing.arkac@gmail.com"
                            class="text-sky-500 hover:underline">marketing.arkac@gmail.com</a>
                    </div>
                    <div>
                        <p class="font-medium">Kömek</p>
                        <a href="mailto:arkach.support@gmail.com"
                            class="text-sky-500 hover:underline">arkach.support@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer -->
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
import TitleSection from '@/components/TitleSection.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: 'Cafes',
    components: {
        Header,
        Navbar,
        TitleSection,
        Footer
    }
}
</script>