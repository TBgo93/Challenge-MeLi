import React from 'react'
import '../styles/Breadcrumb.css'

function ResultsBreadcrumb({ categories }) {
  return <>
    <ul className="results-categories">
      {
        categories.map((category, index) => {
          return (
            <li key={index}>{category}</li>
          )
        })
      }
    </ul>
  </>
};

export default ResultsBreadcrumb;