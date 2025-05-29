<template>
    <div class="w-full h-full">
        <!-- Header -->
        <Header />
        <!-- Navbar -->
        <Navbar />
        <!-- Title Section -->
        <TitleSection :title="$t('nav.contact')" isBorder />
        <!-- Main -->
        <div class="container px-4 sm:px-6 lg:px-8 py-6 sm:py-10 pb-16 sm:pb-28">
            <!-- Contact Section -->
            <div class="flex flex-col lg:flex-row items-start py-10 sm:py-20">
                <!-- Form Section -->
                <div class="w-full lg:w-3/5 space-y-10 sm:space-y-20">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-20 gap-y-10 sm:gap-y-[120px]">
                        <input type="text" v-model="postData.name" :placeholder="$t('contact.fullname')"
                            class="w-full pb-3 placeholder:text-arkac-gray-100 border-b border-black focus:outline-none" />
                        <input type="text" v-model="postData.phone" :placeholder="$t('contact.yourPhone')"
                            class="w-full pb-3 placeholder:text-arkac-gray-100 border-b border-black focus:outline-none" />
                        <input type="email" v-model="postData.email" :placeholder="$t('contact.yourEmail')"
                            class="w-full pb-3 placeholder:text-arkac-gray-100 border-b border-black focus:outline-none" />
                        <input type="text" v-model="postData.message" :placeholder="$t('nav.contact')"
                            class="w-full pb-3 placeholder:text-arkac-gray-100 border-b border-black focus:outline-none" />
                    </div>
                    <Button @click="submintContact" :text="$t('contact.send')" bgColor="bg-arkac-blue-200" borderColor="border-arkac-blue-200" textColor="text-white" iconColor="white" />
                </div>

                <!-- Contact Section -->
                <div class="w-full lg:w-2/5 mt-10 lg:mt-0 lg:pl-10 xl:pl-40 space-y-8 sm:space-y-16 text-sm text-gray-800">
                    <div class="flex flex-col space-y-2 sm:space-y-3">
                        <p class="font-inter font-medium text-base">{{ $t('contact.email') }}</p>
                        <a href="mailto:arkach@gmail.com"
                            class="text-arkac-blue-200 font-inter font-semibold text-base hover:underline">arkach@gmail.com</a>
                    </div>
                    <div class="flex flex-col space-y-2 sm:space-y-3">
                        <p class="font-inter font-medium text-base">{{ $t('contact.marketing') }}</p>
                        <a href="mailto:marketing.arkac@gmail.com"
                            class="text-arkac-blue-200 font-inter font-semibold text-base hover:underline">marketing.arkac@gmail.com</a>
                    </div>
                    <div class="flex flex-col space-y-2 sm:space-y-3">
                        <p class="font-inter font-medium text-base">{{ $t('contact.help') }}</p>
                        <a href="mailto:arkach.support@gmail.com"
                            class="text-arkac-blue-200 font-inter font-semibold text-base hover:underline">arkach.support@gmail.com</a>
                    </div>
                </div>
            </div>
            <!-- Info Section -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-4 sm:gap-6 pt-6 sm:pt-10">
                <div class="p-6 sm:p-10 border border-arkac-gray-500 flex flex-col items-center space-y-3 sm:space-y-4">
                    <h4 class="font-inter font-semibold text-base sm:text-lg pb-3 sm:pb-5">{{ $t('contact.phones') }}</h4>
                    <p class="font-inter font-normal text-base sm:text-lg">+993 61 61 61 61</p>
                    <p class="font-inter font-normal text-base sm:text-lg">+993 61 61 61 61</p>
                    <p class="font-inter font-normal text-base sm:text-lg">+993 61 61 61 61</p>
                </div>
                <div class="p-6 sm:p-10 border border-arkac-gray-500 flex flex-col items-center space-y-3 sm:space-y-4">
                    <h4 class="font-inter font-semibold text-base sm:text-lg pb-3 sm:pb-5">{{ $t('contact.workTimes') }}</h4>
                    <p class="font-inter font-normal text-base sm:text-lg"><span class="text-arkac-gray-900 mr-3 sm:mr-5">{{ $t('contact.time') }}:</span>10:00
                        - 22:00</p>
                    <p class="font-inter font-normal text-base sm:text-lg"><span class="text-arkac-gray-900 mr-3 sm:mr-5">{{ $t('contact.time2') }}:</span>10:00
                        - 22:00</p>
                    <p class="font-inter font-normal text-base sm:text-lg"><span class="text-arkac-gray-900 mr-3 sm:mr-5">{{ $t('contact.time3') }}:</span>10:00
                        - 22:00</p>
                </div>
                <div class="p-6 sm:p-10 border border-arkac-gray-500 flex flex-col space-y-3 sm:space-y-4 h-full items-center md:col-span-2 lg:col-span-1">
                    <h4 class="font-inter font-semibold text-base sm:text-lg pb-3 sm:pb-5">{{ $t('contact.location') }}</h4>
                    <p class="font-inter font-normal text-base sm:text-lg text-center">Magtymguly şaýoly, Aşgabat, Тürkmenistan</p>
                </div>
            </div>
            <!-- Map Section -->
            <div class="w-full h-[400px] sm:h-[600px] lg:h-[900px] py-10 sm:py-20">
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
import api from '@/api/index'
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
    },
    data() {
        return {
            isLoading: false,
            postData: {
                name: '',
                phone: '',
                email: '',
                message: ''
            }
        }
    },
    methods: {
        validatePhone(phone) {
            const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
            return /^\+993\d{8}$/.test(cleanPhone);
        },
        validateForm() {
            if (!this.postData.name || !this.postData.phone || !this.postData.email || !this.postData.message) {
                alert(this.$t('contact.fillAllFields'))
                return false
            }
            if (!this.postData.email.includes('@')) {
                alert(this.$t('contact.invalidEmail'))
                return false
            }
            if (!this.validatePhone(this.postData.phone)) {
                alert(this.$t('contact.invalidPhone'))
                return false
            }
            return true
        },
        resetForm() {
            this.postData = {
                name: '',
                phone: '',
                email: '',
                message: ''
            }
        },
        async submintContact() {
            if (!this.validateForm()) return
            
            this.isLoading = true
            try {
                const result = await api.post('/contact/', this.postData)
                if (result.status === 201) {
                    alert(this.$t('common.sendContact'))
                    this.resetForm()
                } else {
                    alert(this.$t('common.error'))
                }
            } catch (error) {
                console.error('Contact form error:', error)
                if (error.response) {
                    alert(error.response.data.message || this.$t('common.error'))
                } else if (error.request) {
                    alert(this.$t('common.networkError'))
                } else {
                    alert(this.$t('common.error'))
                }
            } finally {
                this.isLoading = false
            }
        }
    }
}
</script>