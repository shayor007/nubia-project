<template>
  <div class="container px-10 mx-auto z-50">
      <div class="flex justify-between items-center">
            <button @click="emitHome" class="">
                <img :src="require('@/images/logo1.png')" class="cover w-60 md:w-72 h-full" />
            </button>

            <div class="block md:hidden">
                <button @click="showMenu" :class="is_revealed ? 'hidden' : 'block'" >
                    <img :src="require('@/images/menu.png')" class="w-8" alt="">
                </button>

                <button @click="hideMenu" :class="is_revealed ? 'block' : 'hidden' ">
                    <img :src="require('@/images/close.png')" class="w-8" alt="">
                </button>
            </div>

            <div :class="is_revealed ? 'block absolute top-14 left-0' : 'hidden md:flex'" class="bg-primary-100 text-white md:bg-transparent h-screen md:h-fit w-full items-center md:pt-0 pt-8 h-screen md:h-auto text-black md:text-white md:justify-end">
                <button class="block md:flex my-6 px-4 font-semibold border-2 md:hover:border-white border-transparent py-2 rounded-sm duration-500 ease-in-out" @click="emitHome">Home</button>
                <button class="block md:flex my-6 px-4 font-semibold border-2 md:hover:border-white border-transparent py-2 rounded-sm duration-500 ease-in-out" @click="emitAboutUs">About Us</button>
                <button class="block md:flex my-6 px-4 font-semibold border-2 md:hover:border-white border-transparent py-2 rounded-sm duration-500 ease-in-out" @click="emitourTeam">Our Team</button>
                <button class="block md:flex my-6 px-4 font-semibold border-2 md:hover:border-white border-transparent py-2 rounded-sm duration-500 ease-in-out" @click="emitcareers">Careers</button>
            </div>
      </div>

  </div>
</template>

<script>
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

        hideMenu(){
            this.is_revealed = false;
        }
    },
}
</script>

<style>

</style>