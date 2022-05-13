import '@testing-library/jest-dom/extend-expect'
import { getProductByid } from './../services/getProductByid';
import { getResultsByKeyword } from './../services/getResultsByKeyword';


describe('test api backend', () => {

  test('service get by id', async () => {
    const data = await getProductByid('MLA1134589136')
    const hasItem = data.hasOwnProperty('item')
  
    expect(hasItem).toBe(true)
  })

  test('service get by keyword', async () => {
    const data = await getResultsByKeyword('televisores')
    const { items } = await data
    const hasProducts = data.hasOwnProperty('items')
  
    expect(hasProducts).toBe(true)
    expect(items).toHaveLength(4)

  })
})

