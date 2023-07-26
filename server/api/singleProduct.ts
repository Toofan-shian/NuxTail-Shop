export default defineEventHandler(async event => {
  // https://fakestoreapi.com/products
  let {id} = getQuery(event)
  console.log("server getting product with id -- " + `${id}`)
  let product = await $fetch('https://fakestoreapi.com/products/' + id)
  console.log('returning single product')
  return product
})