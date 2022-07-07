<template>
    <div class="h-full px-10">
        <div class="max-w-5xl pt-10 lg:max-w-7xl">
                <div class="text-white text-4xl md:text-7xl lg:text-5xl max-w-4xl font-medium lg:text-7xl xl:text-7xl">
                    The better we <span class="underline underline-offset-8"> know you</span>, the more we can do. We'll take <span class="underline underline-offset-8">
                        you further</span>.
                </div>

            <div class="py-32 md:py-6">
                <button class="font-semibold border-2 border-white rounded-sm text-white py-2 px-4 hover:bg-white hover:text-black duration-500 ease-in-out">
                    Let's Talk Business
                </button>
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