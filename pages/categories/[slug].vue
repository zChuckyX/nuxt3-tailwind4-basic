<script setup lang="ts">
const route = useRoute();
console.log(route.params.slug);

const { getSingleCategory, getPosts } = useWPAPI();

const { data: categories, error } = await getSingleCategory(route.params.slug as string);

const categoryFormat = categories.value[0]

const { data: category, error: postError } = await getPosts(categoryFormat.id);

useHead({
    title: `${route.params.slug}`,
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
  <div>
    <div v-if="category?.length != 0" class="container mx-auto">
      <h1>{{ $route.params.slug }}</h1>
      <div class="grid gap-10 sm:grid-cols-3">
        <BlogGrid v-for="item in category" :key="item.id" :title="item.title.rendered" :excerpt="item.excerpt.rendered" :image="item._embedded['wp:featuredmedia'][0]?.source_url" :slug="item.slug"></BlogGrid>
      </div>
    </div>
    <div v-else>
      <h2>Not Found</h2>
    </div>
  </div>
</template>

<style scoped>

</style>
