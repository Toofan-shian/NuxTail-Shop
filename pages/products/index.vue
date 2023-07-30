<template>


  <div class="grid grid-cols-12 ">

    <div class="filters col-span-3 border border-red-700">
      filters
    </div>

    <div class="products col-span-9 border border-green-500">
      <div class="grid grid-cols-2 gap-x-16 gap-y-9">
        <div v-for="(p, index) in products" :key="index">
          <SingleProduct :product="p"></SingleProduct>
        </div>
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