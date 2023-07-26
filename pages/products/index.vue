<template>
  <div class="container mx-auto">
    <div class=" grid grid-cols-4 gap-5">
      <div v-for="(p, index) in products" :key="index">
        <SingleProduct :product="p"></SingleProduct>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'NuxTail Products',
  meta: [
    {name: 'description', content: 'Products Page'}
  ]
})
definePageMeta({
  layout: 'products'
})

let {data: products} = await useFetch("/api/products")
</script>

<style scoped>

</style>