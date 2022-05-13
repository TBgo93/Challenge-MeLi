import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getProductByid } from '../services/getProductByid'
import ItemDetail from "./ItemDetail";
import '../styles/ItemDetail.css'

function ItemDetailContainer() {
  const [product, setProduct] = useState([])
  const { id } = useParams()

  const { item } = product

  useEffect(() => {
    getProductByid(id)
      .then(itemProduct => setProduct(itemProduct))
  }, [id])

  return <>
    <div className="results-container">
      {
        product.length === 0 ? <span>Loading</span> :
          <>
            <ItemDetail product={item} />
          </>
      }
    </div>
  </>
};

export default ItemDetailContainer;