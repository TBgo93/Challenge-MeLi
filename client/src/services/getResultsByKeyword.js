export const getResultsByKeyword = async (keyword) => {
  const response = await fetch(`http://localhost:4000/api/items?q=${keyword}`)
  const data = await response.json()

  return data
}