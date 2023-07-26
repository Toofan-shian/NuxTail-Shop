<template>
  <div class="card text-center">
    <img :src="product.image" alt="" class="thumb">
    <p class="truncate font-bold m-4 text-gray-900">{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn my-4">
        View Details
      </p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const {product} = defineProps(['product'])
</script>

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>