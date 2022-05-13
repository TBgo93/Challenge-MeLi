import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { getResultsByKeyword } from "../services/getResultsByKeyword";
import ResultsList from "./ResultsList";
import ResultsBreadcrumb from "./ResultsBreadcrumb"
import '../styles/Results.css'


function ResultsContainer() {
  const [results, setResults] = useState([])
  const [searchParams] = useSearchParams()

  const { categories, items } = results
  const keyword = searchParams.get('q')

  useEffect(() => {
    getResultsByKeyword(keyword)
      .then(item => setResults(item))
  }, [keyword])

  return <>
    <div className="results-container">
      {
        results.length === 0 ? <span>Loading</span> :
          <>
            <ResultsBreadcrumb categories={categories} />
            <ResultsList result={items} />
          </>
      }
    </div>
  </>
};

export default ResultsContainer;