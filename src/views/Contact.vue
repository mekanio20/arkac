<template>
    <div class="w-full h-full">
        <!-- Header -->
        <Header />
        <!-- Navbar -->
        <Navbar />
        <!-- Title Section -->
        <TitleSection title="Habarlaşmak" isBorder />
        <!-- Main -->
        <div class="container py-10 pb-28">
            <!-- Contact Section -->
            <div class="flex items-start py-20">
                <!-- Form Section -->
                <form class="w-3/5 space-y-20">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-[120px]">
                        <input type="text" placeholder="Doly adyňyz"
                            class="w-full pb-3 placeholder:text-black border-b border-black focus:outline-none" />
                        <input type="text" placeholder="Telefon belgiňiz"
                            class="w-full pb-3 placeholder:text-black border-b border-black focus:outline-none" />
                        <input type="email" placeholder="Elektron salgyňyz"
                            class="w-full pb-3 placeholder:text-black border-b border-black focus:outline-none" />
                        <input type="text" placeholder="Habarlaşmak"
                            class="w-full pb-3 placeholder:text-black border-b border-black focus:outline-none" />
                    </div>
                    <Button text="Ugratmak" bgColor="bg-arkac-blue-200" borderColor="border-arkac-blue-200" textColor="text-white" iconColor="white" />
                </form>

                <!-- Contact Section -->
                <div class="pl-40 space-y-16 text-sm text-gray-800">
                    <div class="flex flex-col space-y-3">
                        <p class="font-inter font-medium text-base">Elektron salgymyz</p>
                        <a href="mailto:arkach@gmail.com"
                            class="text-arkac-blue-200 font-inter font-semibold text-base hover:underline">arkach@gmail.com</a>
                    </div>
                    <div class="flex flex-col space-y-3">
                        <p class="font-inter font-medium text-base">Marketing</p>
                        <a href="mailto:marketing.arkac@gmail.com"
                            class="text-arkac-blue-200 font-inter font-semibold text-base hover:underline">marketing.arkac@gmail.com</a>
                    </div>
                    <div class="flex flex-col space-y-3">
                        <p class="font-inter font-medium text-base">Kömek</p>
                        <a href="mailto:arkach.support@gmail.com"
                            class="text-arkac-blue-200 font-inter font-semibold text-base hover:underline">arkach.support@gmail.com</a>
                    </div>
                </div>
            </div>
            <!-- Info Section -->
            <div class="grid grid-cols-3 items-start pt-10">
                <div class="p-10 border border-arkac-gray-500 flex flex-col items-center justify-center space-y-4">
                    <h4 class="font-inter font-semibold text-lg pb-5">Telefon belgilerimiz</h4>
                    <p class="font-inter font-normal text-lg">+993 61 61 61 61</p>
                    <p class="font-inter font-normal text-lg">+993 61 61 61 61</p>
                    <p class="font-inter font-normal text-lg">+993 61 61 61 61</p>
                </div>
                <div class="p-10 border border-arkac-gray-500 flex flex-col items-center justify-center space-y-4">
                    <h4 class="font-inter font-semibold text-lg pb-5">Iş wagtlarymyz</h4>
                    <p class="font-inter font-normal text-lg"><span class="text-arkac-gray-900 mr-5">пн-чт:</span>10:00
                        - 22:00</p>
                    <p class="font-inter font-normal text-lg"><span class="text-arkac-gray-900 mr-5">пн-чт:</span>10:00
                        - 22:00</p>
                    <p class="font-inter font-normal text-lg"><span class="text-arkac-gray-900 mr-5">пн-чт:</span>10:00
                        - 22:00</p>
                </div>
                <div class="p-10 border border-arkac-gray-500 flex flex-col space-y-4 h-full items-center">
                    <h4 class="font-inter font-semibold text-lg pb-5">Ýerleşýän ýerimiz</h4>
                    <p class="font-inter font-normal text-lg">Magtymguly şaýoly, Aşgabat, Тürkmenistan</p>
                </div>
            </div>
            <!-- Map Section -->
            <div class="w-full h-[700px] py-20">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3021.466246254859!2d58.40204854289826!3d37.93393806473572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2s!4v1714608000083!5m2!1str!2s&markers=icon:https://maps.google.com/mapfiles/ms/icons/red-dot.png%7C37.93393806473572,58.40204854289826"
                    width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
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
import Button from '@/components/base/button.vue';
export default {
    name: 'Cafes',
    components: {
        Header,
        Navbar,
        TitleSection,
        Footer,
        Button
    }
}
</script>