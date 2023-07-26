<template>
  <div class="w-full h-screen flex items-center justify-center bg-orange-100 border border-red-400">
    <div class="max-w-sm -mt-24 text-center bg-white shadow-lg card " >
      <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
      <p class="mt-7 text-6xl">Ooops.</p>
      <p class="mt-7">{{ error.message }}</p>
      <button class="btn w-full mx-auto mt-7" @click="handleClearError">Go Home...</button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['error'])

let handleClearError = () => clearError({redirect: '/'})

</script>

<style >

</style>