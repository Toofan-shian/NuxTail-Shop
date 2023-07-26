<template>
  <productDetails :product="product"></productDetails>
</template>

<script setup lang="ts">
definePageMeta({layout:'products'})
let {id} = useRoute().params
let url = '/api/singleProduct?id=' + id;

let {data: product} = await useFetch(url, {key: id})

if (!product.value) {
  throw createError({statusCode: 404, statusMessage: 'Product Not Found', fatal: true})
}
</script>

<style scoped>

</style>