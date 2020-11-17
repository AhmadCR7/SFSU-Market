// 3rd party imports
import React, { useState } from 'react'
import { Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useQueryCache } from 'react-query'

// My imports

const SearchArea = () => {
  const [category, setCategory] = useState('all')
  const [search, setSearch] = useState('')
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
        style={{ display: 'flex', flexWrap: 'nowrap' }}
        onSubmit={(e) => handleSearch(e)}
      >
        <div>
          <FormControl
            type="text"
            placeholder="Search..."
            isInvalid={search.length > 40}
            className="mr-sm-2"
            style={{ margin: 'auto auto', width: '90%' }}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
            value={search}
          />
          <Form.Control.Feedback type="invalid">
            {search.length > 40 && 'cannot be longer than 40 characters'}
          </Form.Control.Feedback>
        </div>
        <Button
          variant="outline-info"
          type="submit"
          disabled={search.length > 40}
          style={{ color: 'white', borderColor: 'white' }}
        >
          Search
        </Button>
      </Form>
    </div>
  )
}

export default SearchArea
