import React from 'react'
import { Link } from "react-router-dom"

function ResultsItem({ id, title, price, picture, free_shipping }) {
  const { currency, amount, decimals } = price
  const [formatedPrice] = new Intl.NumberFormat('es-AR', { style: 'currency', currency: currency }).format(amount).split(',')
  const formatedDecimals = decimals === 0 ? '00' : decimals

  return <>
    <div className="results-item">
      <div className="results-item_img">
        <Link to={`/items/${id}`} className="results-item_link">
          <img src={picture} alt={title} />
        </Link>
      </div>
      <div className="results-item_info-container">
        <div className="results-item_info">
          <div className="results-item_price">
            {formatedPrice},{formatedDecimals}
          </div>
          {
            free_shipping && (
              <div className="results-item_img-fp">
                <img src="/assets/ic_shipping.png" alt="Free Shipping"/>
              </div>
            )
          }
        </div>
        <Link to={`/items/${id}`} className="results-item_link">
          <h2 className="results-item_title">{title}</h2>
        </Link>
      </div>
    </div>
  </>
};

export default ResultsItem;