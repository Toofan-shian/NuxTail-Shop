<template>
  <div class="min-h-screen flex flex-col">
    <Header></Header>
  
    <div class="container mx-auto p-4">
      <slot></slot>
    </div>
    
    <Footer class="bottom-0 border border-red-500"></Footer>
  </div>
</template>