/* eslint-disable react/button-has-type */
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const CreateListing = () => {
  const { register, handleSubmit, errors } = useForm({ criteriaMode: 'all' })
  const { category, setCategory } = useState('appliances')
  const onSubmit = (data) => console.log(data)
  return (
    <div className="col-lg-4 offset-lg-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Create Listing</h3>
        <div className="form-group">
          <label>Title</label>
          <input
            name="title"
            className="form-control"
            placeholder="Enter title"
            ref={register({
              required: 'Please title your listing',
              minLength: {
                value: 8,
                message: 'Your title is too short',
              },
              maxLength: {
                value: 40,
                message: 'Your title is too long.',
              },
            })}
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div className="form-group">
          <label>Image: </label>
          <div>
            <input type="file" id="img" name="img" accept="image/*" />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <Form.Control
            as="textarea"
            className="form-control"
            placeholder="Describe your post"
            name="description"
            ref={register({
              maxLength: {
                value: 400,
                message: 'Your description is too long.',
              },
            })}
          />
          {errors.description && <p>{errors.description.message}</p>}
        </div>
        <div className="form-group">
          <label>Category {category}</label>
          <Form.Control as="select" className="form-control" style={{ width: '70%' }}>
            <option onClick={() => setCategory('appliances')}>Appliances</option>
            <option onClick={() => setCategory('books')}>Books</option>
            <option onClick={() => setCategory('clothing')}>Clothing</option>
            <option onClick={() => setCategory('electronics')}>Electronics</option>
            <option onClick={() => setCategory('services')}>Services</option>
          </Form.Control>
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            style={{ width: '50%' }}
            name="price"
            className="form-control"
            placeholder="XXX.XX"
            ref={register({
              required: 'Please price your listing',
              pattern: {
                value: /^\d+(?:\.\d{2})$/,
                message: 'Please enter a dollar value',
              },
            })}
          />
          {errors.price && <p>{errors.price.message}</p>}
        </div>
        <button
          type="reset"
          className="btn btn-primary btn-block"
          style={{ backgroundColor: 'red' }}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary btn-block">
          Submit for approval
        </button>
      </form>
    </div>
  )
}

export default CreateListing
