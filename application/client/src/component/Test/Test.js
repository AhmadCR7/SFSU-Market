// 3rd party imports
import React, { useEffect, useState } from 'react'

// My imports
import {useAxios} from '../../hooks/useAxios'

const Test = () => {
  const [response, loading, hasError] = useAxios('/api/category/getAll')

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : hasError ? (
        <div>Error occured.</div>
      ) : (
        response.map((category) => <div key={category.idcategory}>{category.categoryName}</div>)
      )}
    </>
  )
}

export default Test
