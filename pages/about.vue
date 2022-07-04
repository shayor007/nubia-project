<template>
    <div class="relative">
        <div></div>
        <TabUppertab class=""/>
        <div class="container mx-auto relative">
            <TabMaintab class="my-2 absolute z-10"/>
        </div>


        <div class="">        
            <div class="w-full bg-primary-100 bg-opacity-50 absolute h-96"></div>

            <img :src="require('@/images/conf.jpg')" class="object-cover h-96 w-full justify-center" />
        </div>

        <div class="absolute z-20 top-52 text-center mx-auto w-full text-white text-4xl font-medium lg:text-5xl xl:text-6xl">
            <h1>Get Familiar With Us</h1>
        </div>



        <div class="mx-auto ">
            <div class="bg-primary-50 px-10 py-8 ">
                <div class="container mx-auto lg:flex ">
                    <div class="lg:w-1/2 bg- lg:pr-4">
                        <div>
                            <div class="text-4xl font-medium mb-2">
                                About Nubia Capital. 
                            </div>

                            <div class="text-base">
                                We aim to become the most reputable private investment firm with a focus on the African continent <br />
                                With access to more than $4 billion of capital, we are conscientiously investing in Africa to help
                                exceptional people create and grow exceptional
                                businesses. We believe that conscientious investing is key to a better future -
                                a healthier planet, a smarter economy, a diverse and happier community, and a broader path to prosperity.
                                Nubia is a people driven investment firm with a focus on the African Continent.
                            </div> 
                        </div>

                        <div>
                            <div class="font-medium mb-2 mt-6 text-4xl">The Nubia Way</div>
                            <div class="p-2"></div>

                            <div class="text-base">We win by having the best people work on the best opportunities using the very best practices. 

                                CEOs and Founders are at the center of everything we do. We work with exceptional CEOs and Founders who share our
                                values and passion for building enduring purpose-driven companies. We then provide these CEOs and Founders with the 
                                support and capital they need to accelerate growth in their next chapter.
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-1/2 lg:pl-4">
                        <div class="text-center text-4xl font-medium">Where We Invest</div>
                        <div class="p-2"></div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="shadow-lg bg-gray-50 p-4 text-center">
                                <img :src="require('@/images/africa.png')" alt="" class="w-16 mx-auto flex justify-center mb-2">
                                <div class="font-bold mb-2 text-center">Geography</div>
                                <div>Africa or Africa-focused</div>
                            </div>

                            <div class="shadow-lg bg-gray-50 p-4 text-center">
                                <img :src="require('@/images/software.png')" alt="" class="w-16 mx-auto flex justify-center mb-2">
                                <div class="font-bold mb-2 text-center">Industries/Focus areas</div>
                                <div>Software, technology-enabled businesses, industry consolidation</div>
                            </div>

                            <div class="shadow-lg bg-gray-50 p-4 text-center">
                                <img :src="require('@/images/revenue.png')" alt="" class="w-16 mx-auto flex justify-center mb-2">
                                <div class="font-bold mb-2 text-center">Revenue</div>
                                <div>Greater than $5 million</div>
                            </div>

                            <div class="shadow-lg bg-gray-50 p-4 text-center">
                                <img :src="require('@/images/value.png')" alt="" class="w-16 mx-auto flex justify-center mb-2">
                                <div class="font-bold mb-2 text-center">Enterprise value</div>
                                <div>Up to $1 billion</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mx-auto">
            <div class="md:block lg:grid grid-cols-2 gap-6">
                <div class=" mx-auto">
                    <div>
                        <div class="text-4xl font-medium mb-2 text-center mt-8">Transaction types</div>
                        <div class="p-2"></div>

                        <div class="px-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 mx-auto text-center">
                            <div class="shadow-md p-4">
                                <div class="text-6xl text-gray-200">
                                    1
                                </div>
                                <div class="p-2"></div>
                            
                                <div class="font-medium">Growth capital</div>
                            </div>

                            <div class="shadow-md p-4">
                                <div class="text-6xl text-gray-200" >
                                    2
                                </div>
                                <div class="p-2"></div>
                            
                                <div class="font-medium ">Majority recapitalization</div>
                            </div>

                           <div class="shadow-md p-4">
                                <div class="text-6xl text-gray-200">
                                2
                                </div>
                                <div class="p-2"></div>
                            
                                <div class="font-medium">Check size: Min - $5 million | Max - $1 billion</div>
                            </div>

                            <div class="shadow-md p-4">
                                <div class="text-6xl text-gray-200">
                                    4
                                </div>
                                <div class="p-2"></div>
                            
                                <div class="font-medium">Corporate carve-outs and businesses undergoing transitions</div>
                            </div>

                             <div class="shadow-md p-4">
                                <div class="text-6xl text-gray-200">
                                    5
                                </div>
                                <div class="p-2"></div>
                            
                                <div class="font-medium">100% buyout</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <div class="text-4xl font-medium mb-2 text-center mt-8">Working with us</div>
                        <div class="p-2"></div>

                        <div class="px-10 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10 mx-auto">

                            <div class="shadow-md p-4 max-w-sm ">
                                <div>
                                    <img :src="require('@/images/capital.png')" class="mx-auto w-24" />
                                </div>
                                <div class="p-2"></div>

                                <div class="font-bold text-center">
                                    Patient Capital
                                </div>

                                <div class="text-center">
                                    We know that building a great company takes time and we work patiently with businesses to unlock value over time.
                                </div>
                            </div>

                            <div class="shadow-md p-4 ">
                                <div>
                                    <img :src="require('@/images/investor.svg')" class="mx-auto w-24" />
                                </div>
                                <div class="p-2"></div>

                                <div class="font-bold text-center">
                                    Lead Investors
                                </div>

                                <div class="text-center">
                                    We play an active role in closing and governance whenever we are co-investing with likeminded investors
                                </div>
                            </div>

                            <div class="shadow-md p-4 ">
                                <div>
                                    <img :src="require('@/images/talent.svg')" class="mx-auto w-24" />
                                </div>
                                <div class="p-2"></div>

                                <div class="font-bold text-center">
                                    World-class talent
                                </div>

                                <div class="text-center">
                                    Our team consist of exceptional talent that are ready to support you from the very first day and onward. 
                                </div>
                            </div>

                            <div class="shadow-md p-4 ">
                                <div>
                                    <img :src="require('@/images/closing.svg')" class="mx-auto w-24" />
                                </div>
                                <div class="p-2"></div>

                                <div class="font-bold text-center">
                                    High certainty of closing
                                </div>

                                <div class="text-center">
                                    Once we decide that a deal fits well with us, we move with speed and certainty toward a close
                                </div>
                            </div>

                            <div class="shadow-md p-4 ">
                                <div>
                                    <img :src="require('@/images/feedback.svg')" class="mx-auto w-24" />
                                </div>
                                <div class="p-2"></div>

                                <div class="font-bold text-center">
                                    Prompt Feedback 
                                </div>

                                <div class="text-center">
                                    We are committed to being outstanding partners to our intermediaries and we strive to deliver feedback on new deals within 24 hours.
                                </div>
                            </div>

                            <div class="shadow-md p-4 ">
                                <div>
                                    <img :src="require('@/images/invest.png')" class="mx-auto w-24" />
                                </div>
                                <div class="p-2"></div>

                                <div class="font-bold text-center">
                                    Competitive Buy-side fee 
                                </div>
                                
                                <div class="text-center">
                                    We offer an attractive buy-side fee and are excited to hear about opportunities that may be a great fit for Nubia
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div  class=" mx-auto">
            <div class="bg-gray-100 px-10 py-8">

                <div class="container mx-auto">
                    <div class="text-4xl font-medium mb-2 text-center mt-16 ">Nubia Core Values</div>
                    <div class="p-2"></div>

                    <div class=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10 mx-auto">

                        <div class="shadow-md p-4 ">
                            <div>
                                <img :src="require('@/images/trust.svg')" class="mx-auto w-24" />
                            </div>
                            <div class="p-2"></div>

                            <div class="font-bold text-center">
                                Consistency of Character 
                            </div>
                            <div class="text-center">
                                We have good motives, we keep our word and we choose the right path – even when it’s difficult.
                            </div>
                        </div>

                        <div class="shadow-md p-4 ">
                            <div>
                                <img :src="require('@/images/climb.svg')" class="mx-auto w-24" />
                            </div>
                            <div class="p-2"></div>

                            <div class="font-bold text-center">
                                Continuous improvement 
                            </div>
                            <div class="text-center">
                                We always work in a continuum of learning and implementation. Knowing that things can always be better.
                            </div>
                        </div>

                        <div class="shadow-md p-4 ">
                            <div>
                                <img :src="require('@/images/steward.svg')" class="mx-auto w-24" />
                            </div>
                            <div class="p-2"></div>

                            <div class="font-bold text-center">
                                Stewardship
                            </div>
                            <div class="text-center">
                                We treat every resource in our care like it is truly ours.
                            </div>
                        </div>

                        <div class="shadow-md p-4 ">
                            <div>
                                <img :src="require('@/images/done.svg')" class="mx-auto w-24" />
                            </div>
                            <div class="p-2"></div>

                            <div class="font-bold text-center">
                                Get it done 
                            </div>

                            <div class="text-center">
                                We know that time is the most valuable resource on the planet, so we strive to always be at the
                                right place at the right time doing the right things.
                            </div>
                        </div>

                        <div class="shadow-md p-4 ">
                            <div>
                                <img :src="require('@/images/grit.svg')" class="mx-auto w-24" />
                            </div>
                            <div class="p-2"></div>

                            <div class="font-bold text-center">
                                Grit 
                            </div>

                            <div class="text-center">
                                We combine perseverance, tenacity, and passion in our quest to fulfil our mission.
                            </div>
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
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  body{
    font-family: "Poppins", sans-serif;
  }
</style>