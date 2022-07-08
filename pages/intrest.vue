<template>
    <div class="relative">
            <div></div>
                <TabUppertab class=""/>
                <div class="container mx-auto relative">
                    <TabMaintab class="my-2 absolute z-10"/>
                </div>


                <div class="">        
                    <div class="w-full bg-black bg-opacity-50 absolute h-56 md:h-96"></div>

                    <img :src="require('@/images/conf.jpg')" class="object-cover h-56 md:h-96 w-full justify-center" />
                </div>

                <div class="absolute z-20 top-28 md:top-60 text-center mx-auto w-full text-white font-medium text-3xl md:text-5xl lg:text-5xl">
                    <h1 data-aos="zoom-in" data-aos-duration="4000">Get Familiar With Us</h1>
                </div>



            <div class="mx-auto ">

                <div  data-aos="fade-down" data-aos-duration="4000" class="text-2xl md:text-4xl font-medium mb-2 text-center py-10">Where We Invest</div>


                    <div class="bg-no-repeat bg-cover bg-center py-36" :style="{backgroundRepeat: 'no-repeat' + ';' , backgroundImage: 'url(' + require('@/images/meeting0.jpg') +')'}">
                        <div class=" max-w-4xlg mx-auto container">
                            <div class="px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:mx-auto lg:max-w-9xl">
                                <div data-aos="zoom-in" data-aos-duration="4000" class="shadow-lg bg-white p-4 text-center rounded-md">
                                    <img :src="require('@/images/africa.png')" alt="" class="w-16 mx-auto flex justify-center mb-2">
                                    <div class="font-bold  text-center">Geography</div>
                                    <div class="text-sm md:text-base">Africa or Africa-focused</div>
                                </div>

                                <div data-aos="zoom-in" data-aos-duration="4000" class="shadow-lg bg-white p-4 text-center rounded-md">
                                    <img :src="require('@/images/software.png')" alt="" class="w-16 mx-auto flex justify-center mb-2">
                                    <div class="font-bold text-center">Industries/Focus areas</div>
                                    <div class="text-sm md:text-base">Software, technology-enabled businesses, industry consolidation</div>
                                </div>

                                <div data-aos="zoom-in" data-aos-duration="4000" class="shadow-lg bg-white p-4 text-center rounded-md">
                                    <img :src="require('@/images/revenue.png')" alt="" class="w-16 mx-auto flex justify-center mb-2">
                                    <div class="font-bold text-center">Revenue</div>
                                    <div class="text-sm md:text-base">Greater than $5 million</div>
                                </div>

                                <div data-aos="zoom-in" data-aos-duration="4000" class="shadow-lg bg-white p-4 text-center rounded-md">
                                    <img :src="require('@/images/value.png')" alt="" class="w-16 mx-auto flex justify-center mb-2">
                                    <div class="font-bold text-center">Enterprise value</div>
                                    <div class="text-sm md:text-base">Up to $1 billion</div>
                                    <div class="md:py-6"></div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-2"></div>
    </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
export default {
    created(){
        if (process.browser) {
            AOS.init();
        }
    }
}
</script>

<style>
body{
  font-family: "Montserrat" san-serif;
}
</style>