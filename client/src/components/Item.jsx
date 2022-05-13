import React from 'react'

function Item({ title, description, price, picture, condition, sold_quantity }) {
  const { currency, amount, decimals } = price
  const [formatedPrice] = new Intl.NumberFormat('es-AR', { style: 'currency', currency: currency }).format(amount).split(',')
  const formatedDecimals = decimals === 0 ? '00' : decimals

  return <>
    <div className="product-item">
      <div className="product-item_img">
        <img src={picture} alt={title} />
      </div>
      <div className="product-item_info-container">
        <div className='product-item_info-condition-and-sales'>
          <span><p>{condition}</p> - {sold_quantity} vendidos</span>
        </div>
        <h2 className="product-item_title">{title}</h2>
        <div className="product-item_info">
          <div className="product-item_price">
            {formatedPrice},{formatedDecimals}
          </div>
        </div>
        <div className='product-item_buy'>
          <button>Comprar</button>
        </div>
      </div>
      <div className="product-item_description">
        <h3>Descripcion del producto</h3>
        <p>{description}</p>
      </div>
    </div>
  </>
};

export default Item;