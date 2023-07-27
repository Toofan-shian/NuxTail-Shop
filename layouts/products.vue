<template>
  <header class="shadow-lg bg-white">
    <nav class="container mx-auto p-4">
      <NuxtLink to="/products" class="font-bold">Nuxt Merch</NuxtLink>
    </nav>
  </header>

  <div class="container mx-auto p-4">
    <slot></slot>
  </div>

  <Footer class="bottom-0 border border-red-500"></Footer>
</template>