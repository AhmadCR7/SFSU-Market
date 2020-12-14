/* eslint-disable react/button-has-type */
import Axios from 'axios'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { UploadImages } from '../../component/UploadImages/UploadImages'

const CreateListing = () => {
  const { register, handleSubmit, errors } = useForm({ criteriaMode: 'all' })
  const [loading, setLoading] = useState(false)
  const { category, setCategory } = useState('appliances')
  const [tooManyError, setTooManyError] = useState('')
  const [images64, setImages64] = useState([])
  const onSubmit = async (data) => {
    setLoading(true)
    console.log(data)
    let imageRes = []
    if (images64) {
      imageRes = await Axios.post('/api/listing/uploadImages', {
        images: images64,
      })
    }

    console.log(imageRes)
    const listingRes = await Axios.post('/api/listing/createListing', {
      ...data,
      images: imageRes.data.images,
    })
    setLoading(false)
  }

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>Loading...</div>
    )
  }
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
              maxLength: {
                value: 40,
                message: 'Your title is too long.',
              },
            })}
          />
          {errors.title && <p>{errors.title.message}</p>}
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
          <Form.Control
            as="select"
            ref={register}
            name="category"
            className="form-control"
            style={{ width: '70%' }}
          >
            <option onClick={() => setCategory('appliances')}>appliances</option>
            <option onClick={() => setCategory('books')}>books</option>
            <option onClick={() => setCategory('clothing')}>clothing</option>
            <option onClick={() => setCategory('electronics')}>electronics</option>
            <option onClick={() => setCategory('services')}>services</option>
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <UploadImages
            images64={images64}
            setImages64={setImages64}
            setTooManyError={setTooManyError}
          />
          {tooManyError && (
            <p style={{ marginTop: '4rem', color: 'red', fontSize: '13px' }}>{tooManyError}</p>
          )}
        </div>
        <button
          type="reset"
          className="btn btn-primary btn-block"
          style={{ backgroundColor: 'red' }}
        >
          Cancel
        </button>
        <button disabled={tooManyError} type="submit" className="btn btn-primary btn-block">
          Submit for approval
        </button>
      </form>
    </div>
  )
}

export default CreateListing
