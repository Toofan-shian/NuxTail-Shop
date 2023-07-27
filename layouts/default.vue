<template>
  <div class="min-h-screen flex flex-col border-8 border-green-600">
    <Header/>
  
    <div class="container mx-auto p-4">
      <slot></slot>
    </div>
  
    <Footer></Footer>
  </div>
</template>