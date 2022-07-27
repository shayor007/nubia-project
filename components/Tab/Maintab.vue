<template>
  <div class="w-full z-50">
      <div class="flex justify-between items-center md:container md:mx-auto">
            <button @click="emitHome" class="pt-4">
                <img :src="require('@/images/logo1.png')" class="cover w-52 mx-10 md:mx-0 md:w-72 h-full" />
            </button>

            <div class="block md:hidden ">
                <button @click="showMenu" :class="is_revealed ? 'hidden' : 'block'" >
                    <img :src="require('@/images/menu.png')" class="mx-10 pt-4 w-8" alt="">
                </button>

                <button @click="hideMenu" :class="is_revealed ? 'block' : 'hidden' ">
                    <img :src="require('@/images/close.png')" class="mx-10 pt-4 w-8" alt="">
                </button>
            </div>

            <div :class="is_revealed ? 'block absolute top-14 left-0' : 'hidden md:flex'"  class="bg-black text-white md:bg-transparent h-screen md:h-fit w-full items-center md:pt-0  h-screen md:h-auto text-black md:text-white md:justify-end">
                <button class="flex my-6 px-4 font-semibold border-b-2 w-full md:w-max justify-start border-white md:border-2 md:hover:border-white md:border-transparent py-2 rounded-sm duration-500 ease-in-out" @click="emitHome">Home</button>
                <button class="flex my-6 px-4 font-semibold border-b-2 w-full md:w-max justify-start border-white md:border-2 md:hover:border-white md:border-transparent py-2 rounded-sm duration-500 ease-in-out" @click="emitAboutUs">About Us</button>
                <button class="flex my-6 px-4 font-semibold border-b-2 w-full md:w-max justify-start border-white md:border-2 md:hover:border-white md:border-transparent py-2 rounded-sm duration-500 ease-in-out" @click="emitintrest">Our Interest</button>
                <button class="flex my-6 px-4 font-semibold border-b-2 w-full md:w-max justify-start border-white md:border-2 md:hover:border-white md:border-transparent py-2 rounded-sm duration-500 ease-in-out" @click="emitourTeam">Our Team</button>
                <button class="flex my-6 px-4 font-semibold border-b-2 w-full md:w-max justify-start border-white md:border-2 md:hover:border-white md:border-transparent py-2 rounded-sm duration-500 ease-in-out" @click="emitcareers">Careers</button>
                <button class="flex my-6 px-4 font-semibold border-b-2 w-full md:w-max justify-start border-white md:border-2 md:hover:border-white md:border-transparent py-2 rounded-sm duration-500 ease-in-out" @click="emitcontact">Contact Us</button>
            </div>
      </div>

  </div>
</template>

<script>
    import AOS from 'aos';
    import 'aos/dist/aos.css'; // You can also use <link> for styles
    // ..


export default {
    data(){
        return{
            is_revealed: false
        }
    },
    methods: {
        emitAboutUs(){
            this.$router.push({path: '/about'})
        },

        emitourApproach(){
            this.$emit("OurApproach")
        },

        emitourTeam(){
            this.$router.push({path: '/ourteam'})
        },

        emitcareers(){
            this.$router.push({path: '/career'})
        },

        emitHome(){
            this.$router.push({path: '/'})
        },

        showMenu(){
            this.is_revealed = true;
        },

        emitintrest(){
            this.$router.push({path: '/intrest'})
        },
        
        emitcontact(){
            this.$router.push({path: '/contact'})
        },

        hideMenu(){
            this.is_revealed = false;
        },

        created(){
            if (process.browser) {
                AOS.init();
            }
        }
    }


}
</script>

<style>

</style>