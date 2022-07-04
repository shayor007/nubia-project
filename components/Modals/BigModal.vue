<template>
  <transition name="page">
    
    <div class="h-screen fixed w-full blur bg-opacity-50 z-50" v-show="Show">
      <div class="relative min-h-screen bg-gray-800 bg-opacity-75 flex 
justify-center items-center lg:px-0 ">
        <div class="bg-accent2-10 w-full flex justify-center items-end">
        <transition name="page">
          
          <div v-show="Show" :class="MaxWidth" class="z-110 relative 
bg-white  w-full md:max-w-7xl top-0
h-full">
          
            <div class="bg-white z-50 top-0 w-full px-4 sm:px-6 flex
items-center justify-between border-b border-accent1-200 shadow-sm">
              <div class="font-bold text-base sm:text-xl md:text-2xl py-6 
md:px-6 mr-2">
                <slot name="title"></slot>
              </div>
              <div class="">
                <div v-if="!HideClose"  @click="$emit('cancel')" class="cursor-pointer font-medium">
                  <img :src="require('@/images/close_colored.png')" class="w-8" alt="">
                </div>
              </div>
              
            </div>
            
            <div class="">
              <div class="w-full px-4 sm:px-6 custom-scroll-y h-screen-80 
md:h-screen-75">
                <div class="py-4 md:px-4 text-sm sm:text-base">
                  <slot></slot>
                </div>
              </div>
            </div>
          </div>

        </transition>
        </div>
      </div>
    </div>
    
  </transition>
</template>

<script>
export default {
  
  props: {
    HideClose: Boolean,
    HideFooter: {
      default: false,
      type:Boolean,
    },
    MaxWidth: {
      default: 'w-full md:w-3/4',
      type: String
    },
    
    SuccessButtonText: String,
    FormButton: Boolean,
    Show:Boolean,
  },

}
</script>

<style scoped>


.blur{
  background:rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  height: 100%;
}
.custom-scroll-y {
  overflow-y: scroll;     
}

.custom-scroll-y::-webkit-scrollbar {
    width:5px;
    background-color: #fff;
    border:1px solid #e2e2e2;
}

.custom-scroll-y::-webkit-scrollbar-thumb {
    width:5px;
    border-radius: 20%;
    background-color: #000000;
}

.m-responsive {
  min-height:80%;
}

@media screen and (max-width:768px)
{ 
  .m-responsive {
    min-height:80px;
  }
}

</style>
