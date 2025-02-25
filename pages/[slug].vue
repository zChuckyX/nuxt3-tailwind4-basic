<script setup lang="ts">
const route = useRoute();

const { getDetail } = useWPAPI();

const slug = route.params.slug;

const { data: posts, error } = await getDetail(slug as string);

const post = posts.value?.[0]

useHead({
    title: `${post?.title.rendered}`,
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
        <div v-if="post" class="sm:px-20">
            <h1 class="mb-5 text-3xl font-bold leading-snug text-center">{{ post.title.rendered }}</h1>
            <div class="flex justify-center gap-5 mb-10">
                <span>Written By:
                    <span class="text-gray-500">{{ post._embedded['author'][0]?.name }}</span>
                </span>
                <span>
                    Published:
                    <span class="text-gray-500">{{ post.date }}</span>
                </span>
            </div>
            <div class="blog__image h-[250px] sm:h-[500px] w-full rounded shadow-xl relative overflow-hidden mb-12">
                <img :src="post._embedded['wp:featuredmedia'][0]?.source_url" :alt="post.title.rendered" class="absolute object-cover w-full h-full"/>
            </div>
            <div class="blog__content" v-html="post.content.rendered"></div>
        </div>
    </section>
</template>

<style>

</style>