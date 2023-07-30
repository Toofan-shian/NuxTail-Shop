<template>
  <div class="min-h-screen flex flex-col">
    <Header/>
    <carousel/>
  
    <div class="container mx-auto p-4">
      <slot></slot>
    </div>
  
    <Footer></Footer>
  </div>
</template>