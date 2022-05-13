import fetch from 'cross-fetch'
import getNumberWithDecimals from '../../utils/getNumberWithDecimals.js'

const API_ML_ITEM_ID = 'https://api.mercadolibre.com/items/'

async function getItemById(itemId) {
  const responses = await Promise.all([
    fetch(`${API_ML_ITEM_ID}${itemId}`),
    fetch(`${API_ML_ITEM_ID}${itemId}/description`)
  ])
  const [itemData, itemDescription] = await responses.map(response => response.json())

  const {id, title, price, currency_id, secure_thumbnail, condition, shipping, sold_quantity} = await itemData
  const { free_shipping } = await shipping
  const { plain_text } = await itemDescription
  const [amount,decimals] = getNumberWithDecimals(price)

  const data = {
    "author": { 
      "name": "Tomas",
      "lastname": "Baigorria"
    },
    "item": {
      "id": id,
      "title": title,
      "price": {
        "currency": currency_id,
        "amount": amount,
        "decimals": decimals
        },
      "picture": secure_thumbnail,
      "condition": condition,
      "free_shipping": free_shipping,
      "sold_quantity": sold_quantity,
      "description": plain_text
    }
  }

  return data
}

export default getItemById
