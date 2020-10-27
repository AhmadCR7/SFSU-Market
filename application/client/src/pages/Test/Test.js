// 3rd party imports
import React from 'react'
import axios from 'axios'
import {useQuery} from 'react-query'

// My imports

const fetchCategories = async () => {
  const res = await axios('/api/category/getAll')
  return res
}

const Test = () => {

  const { data, status } = useQuery('categories', fetchCategories)

  if(status === 'loading') {
    return <div>loading</div>
  }

  if(status === 'error') {
    return <div>Error</div>
  }

  return (
    <div>
      {data.data.data[0].name}
    </div>
  )
}

export default Test
