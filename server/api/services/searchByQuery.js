import fetch from 'cross-fetch'
import getNumberWithDecimals from '../../utils/getNumberWithDecimals.js'

const API_ML_SEARCH = 'https://api.mercadolibre.com/sites/MLA/search?q='
const LENGTH_RESULTS = 4

async function searchByQuery(keyword){
  const response = await fetch(`${API_ML_SEARCH}${keyword}`)
  const { results, filters } = await response.json()
  const [{ values }] = filters
  const [{ path_from_root }] = values
  const categories = path_from_root.map(({ name }) => name)
  const resultsSliced = results.slice(0, LENGTH_RESULTS)

  const newResults = resultsSliced.map(item => {
    const { id, title, price: numericPrice, currency_id, thumbnail, condition, shipping } = item
    const [amount,decimals] = getNumberWithDecimals(numericPrice)
    const price = {
      "currency": currency_id,
      amount,
      decimals
    }
    const picture = thumbnail
    const { free_shipping } = shipping
    return { id, title, price, picture, condition, free_shipping }
  })

  const data = {
    "author": { 
      "name": "Tomas",
      "lastname": "Baigorria"
    },
    "categories": categories,
    "items": newResults
  }

  return data
}

export default searchByQuery
