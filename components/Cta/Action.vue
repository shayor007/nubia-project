<template>
    <div class="mx-10 md:mx-0">
        <div class="max-w-2xl md:max-w-3xl lg:max-w-7xl">
            <div class="">
                <div class="text-white text-4xl md:text-7xl lg:text-5xl max-w-4xl font-medium lg:text-7xl xl:text-7xl">
                    The better we <span class="underline underline-offset-8"> know you</span>, the more we can do. We'll take <span class="underline underline-offset-8">
                        you further</span>.
                </div>

                <div class="">
                    <button class="font-semibold border-2 border-white rounded-sm text-white hover:bg-white hover:text-black">
                        Let's Talk Business
                    </button>
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
        AOS.init();
    }
}
</script>

<style>

</style>