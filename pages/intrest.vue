<template>
  <div class="relative">
        <TabUppertab class=""/>
        <div class="container mx-auto relative">
            <TabMaintab class="my-2 absolute z-10"/>
        </div>


        <div class="">        
            <div class="w-full bg-black bg-opacity-50 absolute h-96"></div>

            <img :src="require('@/images/conf.jpg')" class="object-cover h-96 w-full justify-center" />
        </div>

        <div class="absolute z-20 top-52 text-center mx-auto w-full text-white text-4xl font-medium lg:text-5xl xl:text-6xl">
            <h1 data-aos="zoom-in" data-aos-duration="4000">Get Familiar With Us</h1>
        </div>



        <div class="mx-auto ">
            <div class="px-10 py-8">
                    <div class="md:grid grid-cols-2 gap-6 max-w-6xl mx-auto">
                        <div class="container block md:mx-auto md:lg:flex">
                            <div class="text-4xl font-medium mb-2 my-6 ">
                                About Nubia Capital 
                            </div>

                            <div class="text-base ">
                                We aim to become the most reputable private investment firm with a focus on the African continent <br />
                                With access to more than $4 billion of capital, we are conscientiously investing in Africa to help
                                exceptional people create and grow exceptional
                                businesses. We believe that conscientious investing is key to a better future -
                                a healthier planet, a smarter economy, a diverse and happier community, and a broader path to prosperity.
                                Nubia is a people driven investment firm with a focus on the African Continent.
                            </div> 
                        </div>

                        <div>
                            <div class="font-medium mb-2 my-6 text-4xl">The Nubia Way</div>

                            <div class="text-base">We win by having the best people work on the best opportunities using the very best practices. 

                                CEOs and Founders are at the center of everything we do. We work with exceptional CEOs and Founders who share our
                                values and passion for building enduring purpose-driven companies. We then provide these CEOs and Founders with the 
                                support and capital they need to accelerate growth in their next chapter.
                            </div>
                        </div>
                    </div>

                </div>


            <div  data-aos="fade-down" data-aos-duration="4000" class="text-4xl font-medium mb-2 text-center py-10">Where We Invest</div>


                <div class="bg-no-repeat bg-cover bg-center py-36" :style="{backgroundRepeat: 'no-repeat' + ';' , backgroundImage: 'url(' + require('@/images/meeting0.jpg') +')'}">
                    <div class="pt-10 max-w-4xlg mx-auto container">
                        <div class="px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:mx-auto lg:max-w-9xl">
                            <div data-aos="zoom-in" data-aos-duration="4000" class="shadow-lg bg-white p-4 text-center rounded-md">
                                <img :src="require('@/images/africa.png')" alt="" class="w-16 mx-auto flex justify-center mb-2">
                                <div class="font-bold  text-center">Geography</div>
                                <div>Africa or Africa-focused</div>
                            </div>

                            <div data-aos="zoom-in" data-aos-duration="4000" class="shadow-lg bg-white p-4 text-center rounded-md">
                                <img :src="require('@/images/software.png')" alt="" class="w-16 mx-auto flex justify-center mb-2">
                                <div class="font-bold text-center">Industries/Focus areas</div>
                                <div>Software, technology-enabled businesses, industry consolidation</div>
                            </div>

                            <div data-aos="zoom-in" data-aos-duration="4000" class="shadow-lg bg-white p-4 text-center rounded-md">
                                <img :src="require('@/images/revenue.png')" alt="" class="w-16 mx-auto flex justify-center mb-2">
                                <div class="font-bold text-center">Revenue</div>
                                <div>Greater than $5 million</div>
                            </div>

                            <div data-aos="zoom-in" data-aos-duration="4000" class="shadow-lg bg-white p-4 text-center rounded-md">
                                <img :src="require('@/images/value.png')" alt="" class="w-16 mx-auto flex justify-center mb-2">
                                <div class="font-bold text-center">Enterprise value</div>
                                <div >Up to $1 billion</div>
                                <div class="md:py-6"></div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
body{
  font-family: "Montserrat" san-serif;
}
</style>