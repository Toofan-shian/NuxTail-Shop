<template>
  <header class="shadow-lg bg-white px-7 py-3">
    <nav class="flex justify-between container mx-auto p-4">
      <NuxtLink to="/" class="font-bold text-xl">NuxTail Shop</NuxtLink>
      <ul class="flex gap-4 ">
        <li class="">
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products">Products</NuxtLink>
        </li>
        <li class="relative">
          <NuxtLink to="/products">
            <span class="material-icons-outlined">
              shopping_cart
            </span>
            <span class="absolute -top-4 -right-3">
              <div class="items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                6
              </div>
            </span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>