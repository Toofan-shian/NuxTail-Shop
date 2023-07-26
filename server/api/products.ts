import { baseURL } from "nuxt/dist/core/runtime/nitro/paths"

export default defineEventHandler(async (event) => {
  console.log('server getting products')
  let {productsBaseUrl} = useRuntimeConfig()
  const data = await $fetch(productsBaseUrl)
  console.log('returning products')
  return data
  
})