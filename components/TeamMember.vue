<template>
  <div>
    <div class="shadow-md p-6">
        <div class="w-full w- p-6">
            <img :src="imageUrl" class="rounded-full w-72 mx-auto" />
        </div>

        <div class="p-4"></div>

        <div class="text-primary-100 font-bold text-center mx-auto">{{member_name}} – {{member_position}}</div>

        <div class=" block pt-8 text-left rounded-sm">
            {{member_short}}
        </div>

        <div class="py-4"></div>


        <button @click="$emit('ToggleModal')" class="bg-primary-100 text-white flex justify-center mx-auto py-2 px-4 text-center rounded-md">READ MORE</button>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        imageUrl: String,
        member_name: String,
        member_position: String,
        member_short: String
    }
}
</script>

<style>

</style>