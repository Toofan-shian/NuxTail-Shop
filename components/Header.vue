<template>
  <header class="shadow-lg bg-white">
    <nav class="flex justify-between container mx-auto p-4">
      <NuxtLink to="/" class="font-bold text-xl">Nuxt Project</NuxtLink>
      <ul class="flex gap-4 ">
        <li class="">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products" class="btn">Products</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>