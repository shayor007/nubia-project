<template>
    <div class="relative">
        <TabUppertab class=""/>
        <div class="container mx-auto relative">
        <TabMaintab class="my-2 absolute z-10"/>
        </div>

        <div class="">
            <div class="w-full bg-black bg-opacity-50 absolute h-56 md:h-96"></div>
            <img :src="require('@/images/phone.jpg')" class="object-cover h-56 md:h-96 w-full justify-center" />
        </div>

        <div data-aos="zoom-in" data-aos-duration="4000" class="absolute z-20 top-28 md:top-60 text-center mx-auto w-full text-white font-medium text-3xl md:text-5xl lg:text-5xl">
            Contact Us
        </div>



        <div class="bg-white p-8 font-bold text-xl md:text-2xl lg:text-3xl">

            <div class="max-w-screen-xl px-4 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray text-gray-900 rounded-lg">
                <div class="flex flex-col justify-between">
                <div>
                    <h2 class="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
                    <div class="text-gray-700 mt-8">
                    Send us an <span class="underline">email</span>.
                    </div>
                </div>
                <div class="mt-8 text-center">
                    <img :src="require('@/images/mail.svg')" class="mx-auto w-50" />
                </div>
                </div>
                <div class="">
                <div>
                    <span class="uppercase text-sm text-black font-bold">Full Name</span>
                    <input class="w-full bg-gray-100 text-black mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="">
                </div>
                <div class="mt-8">
                    <span class="uppercase text-sm text-black font-bold">Email</span>
                    <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text">
                </div>
                <div class="mt-8">
                    <span class="uppercase text-sm text-black font-bold">Message</span>
                    <textarea
                    class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div class="mt-8">
                    <button
                    class="uppercase text-sm font-bold tracking-wide bg-black text-white p-2 rounded-lg w-full focus:outline-none focus:shadow-outline">
                    Send Message
                    </button>
                </div>
                </div>
            </div>
        </div>

        <div class="bg-no-repeat bg-cover bg-center py-36" :style="{backgroundRepeat: 'no-repeat' + ';' , backgroundImage: 'url(' + require('@/images/globe.jpg') +')'}">
            <div class=" max-w-4xlg mx-auto container">
                <div class="px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:mx-auto lg:max-w-9xl">
                    <div data-aos="zoom-in" data-aos-duration="4000" class="shadow-lg bg-white p-4 mx-auto  rounded-md">
                        <div class=" mx-auto">
                            <img :src="require('@/images/location.png')" alt="" class="w-16 mb-2 mx-auto">
                            <div class="text-sm md:text-base font-bold">Michigan - 1950 S Rochester Road, Suite 1091, Rochester Hills, MI 48307</div>
                            <div class="text-sm md:text-base font-bold">California - 425 W 5th Avenue, Escondido CA 92025</div>
                        </div> 
                    </div>

                    <div data-aos="zoom-in" data-aos-duration="4000" class="shadow-lg bg-white p-6 md:p-4 text-center rounded-md">
                        <div class="">
                            <img :src="require('@/images/email.svg')" alt="" class="w-16 mx-auto justify-center mb-2">
                            <div class="text-sm md:text-base text-center font-bold">olamide@nubiacapital.com</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'IndexPage'
}
</script>   

<style>
body{
  font-family: "Montserrat" san-serif;
}  
</style>