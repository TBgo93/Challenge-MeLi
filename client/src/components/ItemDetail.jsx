import React from 'react'
import Item from './Item'

function ItemDetail({ product }) {
  const { id, title, description, price, picture, condition, sold_quantity } = product
  return <>
    <div className="product-container">
      {
        <Item
          key={id}
          title={title}
          description={description}
          price={price}
          picture={picture}
          condition={condition}
          sold_quantity={sold_quantity}
        />
      }
    </div>
  </>
};

export default ItemDetail;