// 3rd party imports
import React, { useState } from 'react'
import { Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useQueryCache } from 'react-query'

// My imports

const SearchArea = () => {
  const [category, setCategory] = useState('all')
  const [search, setSearch] = useState(null)
  const queryCache = useQueryCache()
  const history = useHistory()

  const handleSearch = (e) => {
    e.preventDefault()

    queryCache.invalidateQueries('listings')
    history.push({
      pathname: '/listings/',
      search: `?category=${category}&searchQuery=${search}`,
      state: { category, searchQuery: search },
    })
  }

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ margin: 'auto 0' }}>
        <NavDropdown title={<span style={{ color: 'white' }}>{category}</span>}>
          <NavDropdown.Item onClick={() => setCategory('all')}>all</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => setCategory('appliances')}>appliances</NavDropdown.Item>

          <NavDropdown.Item onClick={() => setCategory('books')}>books</NavDropdown.Item>

          <NavDropdown.Item onClick={() => setCategory('clothing')}>clothing</NavDropdown.Item>

          <NavDropdown.Item onClick={() => setCategory('electronics')}>
            electronics
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => setCategory('services')}>services</NavDropdown.Item>
        </NavDropdown>
      </div>
      <Form
        className="form-center"
        inline
        style={{ width: '35rem' }}
        onSubmit={(e) => handleSearch(e)}
      >
        <FormControl
          type="text"
          placeholder="Search..."
          className="mr-sm-2"
          style={{ margin: 'auto auto%', width: '70%' }}
          onChange={(e) => {
            setSearch(e.target.value)
          }}
          value={search}
        />
        <Button
          variant="outline-info"
          type="submit"
          style={{ color: 'white', borderColor: 'white' }}
        >
          Search
        </Button>
      </Form>
    </div>
  )
}

export default SearchArea
