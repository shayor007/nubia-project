<template>
    <div class="relative">
        <TabUppertab class=""/>
        <div class="container mx-auto relative">
        <TabMaintab class="my-2 absolute z-10"/>
        </div>

        <div class="">
            <div class="w-full bg-black bg-opacity-50 absolute h-56 md:h-96"></div>
            <img :src="require('@/images/interview.jpg')" class="object-cover h-56 md:h-96 w-full justify-center" />
        </div>

        <div data-aos="zoom-in" data-aos-duration="4000" class="absolute z-20 top-28 md:top-60 text-center mx-auto w-full text-white font-medium text-3xl md:text-5xl lg:text-5xl">
            Join Nubia Capital
        </div>


        <div class="p-8"></div>
        <div class="text-sm md:text-base md:font px-10 container md:container mx-auto">
            At Nubia, we believe that winning requires having the very best people work on the very best opportunities using the very best practices. Hence, our
             indefatigable pursuit of the best talent globally. We hire on a rolling basis so if you believe that you are a good fit for what we are doing at Nubia, 
             email your resume along with a purpose statement to <span class="font-bold text-primary-100">career@nubiacap.com</span>.
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