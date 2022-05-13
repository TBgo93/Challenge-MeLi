import React from 'react'
import ResultsItem from './ResultsItem'

function ResultsList({ result }) {
  return <>
    <div className='results_list'>
      {
        result.map(({ id, title, price, picture, free_shipping }) =>
          <ResultsItem
            key={id}
            id={id}
            title={title}
            price={price}
            picture={picture}
            free_shipping={free_shipping}
          />
        )
      }
    </div>
  </>
};

export default ResultsList;