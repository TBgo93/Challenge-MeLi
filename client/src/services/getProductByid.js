export const getProductByid = async (id) => {
  const response = await fetch(`http://localhost:4000/api/items/${id}`)
  const data = await response.json()

  return data
}