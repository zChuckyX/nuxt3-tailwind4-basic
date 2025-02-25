<script setup lang="ts">
const route = useRoute();
console.log(route.params.slug);

</script>

<template>
  <div>
    <h1>{{ $route.params.slug }}</h1>
  </div>
</template>

<style scoped>

</style>
