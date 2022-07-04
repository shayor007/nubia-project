<template>
  <div class="container px-10 mx-auto">
      <div class="flex justify-between items-center">
            <div class="">
                <img :src="require('@/images/logo1.png')" class="cover w-72 h-full" />
            </div>

        <div class="text-white flex justify-between">
            <button class="px-4 font-semibold border-2 hover:border-white border-transparent py-2 rounded-sm duration-500 ease-in-out" @click="emitHome">Home</button>
            <button class="px-4 font-semibold border-2 hover:border-white border-transparent py-2 rounded-sm duration-500 ease-in-out" @click="emitAboutUs">About Us</button>
            <button class="px-4 font-semibold border-2 hover:border-white border-transparent py-2 rounded-sm duration-500 ease-in-out" @click="emitourTeam">Our Team</button>
            <button class="px-4 font-semibold border-2 hover:border-white border-transparent py-2 rounded-sm duration-500 ease-in-out" @click="emitcareers">Careers</button>
        </div>
      </div>

  </div>
</template>

<script>
export default {
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
        }
    },
}
</script>

<style>

</style>