<script setup lang="ts">

const { getCategory } = useWPAPI();

const { data: category, error } = await getCategory();

console.log(category)

useHead({
    title: `Categories`,
    meta: [
        { 
            name: 'description', 
            content: 'Home Nuxt 3, Learning' 
        },
        {
            name: 'keywords',
            content: 'Home, Nuxt 3, Learning Nuxt 3'
        },
    ],
})

</script>

<template>
    <section>
        <div class="container mx-auto">
            <div class="flex flex-wrap gap-5">
                <NuxtLink v-for="item in category" :key="item.id" :to="`/categories/${item.slug}`" class="flex items-center justify-center px-4 py-2 text-2xl text-white uppercase duration-200 rounded shadow-md hover:shadow-lg" :style="{ backgroundColor: colorGenerate()}">
                    <span class="font-semibold">#{{ item.name }}</span>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>