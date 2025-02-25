<script setup lang="ts">

const { getPosts } = useWPAPI();

const { data: posts, error } = await getPosts()

//Head Text
useHead({
    title: 'Home',
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
    <main>
        <section class="container mx-auto">
            <div class="container py-10">
                <div class="grid gap-10 sm:grid-cols-3">
                    <BlogGrid v-for="post in posts" :key="post.id" :title="post.title.rendered" :image="post._embedded['wp:featuredmedia'][0]?.source_url" :excerpt="post.excerpt.rendered" :slug="post.slug"></BlogGrid>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>

</style>