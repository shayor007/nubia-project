<template>
    <div class="relative ">
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
                <div class="px-10 py-8">
                        <div class="md:grid grid-cols-2 gap-6 max-w-6xl mx-auto">
                            <div class="container block md:mx-auto md:lg:flex">
                                <div class="text-2xl md:text-4xl font-medium mb-2 my-6 ">
                                    About Nubia Capital 
                                </div>

                                <div class="text-sm md:text-base ">
                                    Nubia is a people driven investment firm with a focus on the African Continent. With access to more than $4 billion of capital, we are conscientiously investing in Africa to help exceptional people create and grow exceptional businesses. We believe that conscientious investing is key to a better future - a healthier planet, a smarter economy, a diverse and happier community, and a broader path to prosperity.
                                </div> 
                            </div>

                            <div>
                                <div class="font-medium mb-2 my-6 text-2xl md:text-4xl">The Nubia Way</div>

                                <div class="text-sm md:text-base">We win by having the best people work on the best opportunities using the very best practices. 

                                    CEOs and Founders are at the center of everything we do. We work with exceptional CEOs and Founders who share our
                                    values and passion for building enduring purpose-driven companies. We then provide these CEOs and Founders with the 
                                    support and capital they need to accelerate growth in their next chapter.
                                </div>
                            </div>
                        </div>

                    </div>


                <!-- <div  data-aos="fade-down" data-aos-duration="4000" class="text-2xl md:text-4xl font-medium mb-2 text-center py-10">Where We Invest</div> -->


                    <!-- <div class="bg-no-repeat bg-cover bg-center py-36" :style="{backgroundRepeat: 'no-repeat' + ';' , backgroundImage: 'url(' + require('@/images/meeting0.jpg') +')'}">
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

            <div data-aos="fade-down" data-aos-duration="4000" class="text-2xl md:text-4xl font-medium mb-2 text-center mt-8">Transaction Types</div>
            <div class="p-2"></div>


        <div class="container mx-auto mt-10">
            <div class="gap-6">
                <div class=" mx-auto ">
                    <div class="px-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 mx-auto text-center max-w-9xl">
                        <div data-aos="slide-left" data-aos-duration="4000" class="shadow-md p-4">
                            <div class="text-6xl text-gray-200">
                                1
                            </div>
                            <div class="p-2"></div>
                        
                            <div class="text-sm md:text-base font-semibold">Growth capital</div>
                        </div>

                        <div data-aos="slide-right" data-aos-duration="4000" class="shadow-md p-4">
                            <div class="text-6xl text-gray-200" >
                                2
                            </div>
                            <div class="p-2"></div>
                        
                            <div class="text-sm md:text-base font-semibold ">Majority recapitalization</div>
                        </div>

                        <div data-aos="slide-left" data-aos-duration="4000" class="shadow-md p-4">
                            <div class="text-6xl text-gray-200">
                            3
                            </div>
                            <div class="p-2"></div>
                        
                            <div class="text-sm md:text-base font-semibold">Check size: Min - $5 million | Max - $1 billion</div>
                        </div>

                        <div data-aos="slide-right" data-aos-duration="4000" class="shadow-md p-4">
                            <div class="text-6xl text-gray-200">
                                4
                            </div>
                            <div class="p-2"></div>
                        
                            <div class="text-sm md:text-base font-semibold">Corporate carve-outs and businesses undergoing transitions</div>
                        </div>

                            <div data-aos="slide-left" data-aos-duration="4000" class="shadow-md p-4">
                            <div class="text-6xl text-gray-200">
                                5
                            </div>
                            <div class="p-2"></div>
                        
                            <div class="text-sm md:text-base font-semibold">100% buyout</div>
                        </div>
                
                </div>
            </div>
        </div> -->

        <div data-aos="fade-down" data-aos-duration="4000" class="text-2xl md:text-4xl  font-medium mb-2 text-start text-center mt-16 pb-4">Perks Of Working With Us</div>
            <div class="p-2"></div>   
        </div>

        <div class="bg-gray-100 py-32">
                <div>
                    <div class="container px-10 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10 mx-auto ">

                        <div data-aos="zoom-in" data-aos-duration="4000" class="shadow-md bg-white p-4">
                            <div>
                                <img :src="require('@/images/capital.png')" class="mx-auto w-24" />
                            </div>
                            <div class="p-2"></div>

                            <div class="font-bold">
                                Patient Capital
                            </div>

                            <div class="text-sm md:text-base text-center">
                                We know that building a great company takes time and we work patiently with businesses to unlock value over time.
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="4000" class="shadow-md bg-white p-4 ">
                            <div>
                                <img :src="require('@/images/investor.svg')" class="mx-auto w-24" />
                            </div>
                            <div class="p-2"></div>

                            <div class="font-bold text-center">
                                Lead Investors
                            </div>

                            <div class="text-sm md:text-base text-center">
                                We play an active role in closing and governance whenever we are co-investing with likeminded investors
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="4000" class="shadow-md p-4 bg-white ">
                            <div>
                                <img :src="require('@/images/talent.svg')" class="mx-auto w-24" />
                            </div>
                            <div class="p-2"></div>

                            <div class="font-bold text-center">
                                World-class talent
                            </div>

                            <div class="text-sm md:text-base text-center">
                                Our team consist of exceptional talent that are ready to support you from the very first day and onward. 
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="4000" class="shadow-md p-4 bg-white ">
                            <div>
                                <img :src="require('@/images/closing.svg')" class="mx-auto w-24" />
                            </div>
                            <div class="p-2"></div>

                            <div class="font-bold text-center">
                                High certainty of closing
                            </div>

                            <div class="text-sm md:text-base text-center">
                                Once we decide that a deal fits well with us, we move with speed and certainty toward a close
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="4000" class="shadow-md p-4 bg-white">
                            <div>
                                <img :src="require('@/images/feedback.svg')" class="mx-auto w-24" />
                            </div>
                            <div class="p-2"></div>

                            <div class="font-bold text-center">
                                Prompt Feedback 
                            </div>

                            <div class="text-sm md:text-base text-center text-sm md:text-base">
                                We are committed to being outstanding partners to our intermediaries and we strive to deliver feedback on new deals within 24 hours.
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="4000" class="shadow-md p-4 bg-white">
                            <div>
                                <img :src="require('@/images/invest.png')" class="mx-auto w-24" />
                            </div>
                            <div class="p-2"></div>

                            <div class="font-bold text-center">
                                Competitive Buy-side fee 
                            </div>
                            
                            <div class="text-sm md:text-base text-center">
                                We offer an attractive buy-side fee and are excited to hear about opportunities that may be a great fit for Nubia
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <div  class=" mx-auto"></div>

        <div data-aos="fade-down" data-aos-duration="4000" class="bg-white px-10 mt-10">
                <div class="text-2xl md:text-4xl font-medium text-center mt-16 ">Nubia Core Values</div>


                <div class="container mx-auto py-16 md:py-32">
                    

                    <div class=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10 mx-auto">

                        <div data-aos="zoom-in" data-aos-duration="4000" class="shadow-md p-4 ">
                            <div>
                                <img :src="require('@/images/trust.svg')" class="mx-auto w-24" />
                            </div>
                            <div class="p-2"></div>

                            <div class="font-bold text-center">
                                Consistency of Character 
                            </div>
                            <div class="text-sm md:text-base text-center">
                                We have good motives, we keep our word and we choose the right path – even when it’s difficult.
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="4000" class="shadow-md p-4 ">
                            <div>
                                <img :src="require('@/images/climb.svg')" class="mx-auto w-24" />
                            </div>
                            <div class="p-2"></div>

                            <div class="font-bold text-center">
                                Continuous improvement 
                            </div>
                            <div class="text-sm md:text-base text-center">
                                We always work in a continuum of learning and implementation. Knowing that things can always be better.
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="4000" class="shadow-md p-4 ">
                            <div>
                                <img :src="require('@/images/steward.svg')" class="mx-auto w-24" />
                            </div>
                            <div class="p-2"></div>

                            <div class="font-bold text-center">
                                Stewardship
                            </div>
                            <div class="text-sm md:text-base text-center">
                                We treat every resource in our care like it is truly ours.
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="4000" class="shadow-md p-4 ">
                            <div>
                                <img :src="require('@/images/done.svg')" class="mx-auto w-24" />
                            </div>
                            <div class="p-2"></div>

                            <div class="font-bold text-center">
                                Get it done 
                            </div>

                            <div class="text-sm md:text-base text-center">
                                We know that time is the most valuable resource on the planet, so we strive to always be at the
                                right place at the right time doing the right things.
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="4000" class="shadow-md p-4 ">
                            <div>
                                <img :src="require('@/images/grit.svg')" class="mx-auto w-24" />
                            </div>
                            <div class="p-2"></div>

                            <div class="font-bold text-center">
                                Grit 
                            </div>

                            <div class="text-sm md:text-base text-center">
                                We combine perseverance, tenacity, and passion in our quest to fulfil our mission.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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