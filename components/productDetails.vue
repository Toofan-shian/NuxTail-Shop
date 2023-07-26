<template>
  <Head>
    <Title>NuxTail | {{ product.title }}</Title>
    <Meta name="description" :content="product.description"/>
  </Head>
  <div class="shadow-lg">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.image" alt="" class="my-7 mx-auto">
      </div>
      <div class="py-7">
        <h2
          class="text-4xl my-7"
        >{{ product.title }}</h2>
        <h3 class="text-xl my-7">${{ product.price }}</h3>
        <h3 class="font-bold border-b-2 py-4 mr-7">Product Description</h3>
        <p class="my-4 mr-7">
          {{ product.description }}
        </p>
        <button class="flex btn">
          <i class="material-icons w-9">shoping_cart</i>
          <span>Add To Cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let {product} = defineProps([
  'product'
])


</script>

<style scoped>
.image {
  max-width: 400px;
}
</style>