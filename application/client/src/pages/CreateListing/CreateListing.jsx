/* eslint-disable react/button-has-type */
import axios from 'axios'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useQuery } from 'react-query'
import { useForm } from 'react-hook-form'
import { UploadImages } from '../../component/UploadImages/UploadImages'

const fetchCategories = async () => {
  const res = await axios('/api/category/getAllCategories')
  return res.data.categories
}
const fetchClasses = async () => {
  const res = await axios('/api/class/getAllClasses')
  return res.data.classes
}

const CreateListing = () => {
  const { register, handleSubmit, errors, getValues } = useForm({ criteriaMode: 'all' })
  const [loading, setLoading] = useState(false)
  const [categoryChange, setCategoryChange] = useState(false)
  const [tooManyError, setTooManyError] = useState('')
  const [images64, setImages64] = useState([])

  const {
    isLoading: isLoadingCategories,
    error: errorCategories,
    data: dataCategories = [],
  } = useQuery('categories', fetchCategories)

  const { isLoading: isLoadingClasses, error: errorClasses, data: dataClasses = [] } = useQuery(
    'classes',
    fetchClasses
  )

  const onSubmit = async (data) => {
    setLoading(true)
    console.log(data)
    let imageRes = []
    if (images64) {
      imageRes = await axios.post('/api/listing/uploadImages', {
        images: images64,
      })
    }

    console.log(imageRes)
    const listingRes = await axios.post('/api/listing/createListing', {
      ...data,
      className: data.class,
      images: imageRes.data.images,
    })
    setLoading(false)
  }

  if (loading || isLoadingCategories || isLoadingClasses) {
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
          <label>Category</label>
          <Form.Control
            as="select"
            ref={register}
            name="category"
            onChange={() => setCategoryChange(!categoryChange)}
            className="form-control"
            style={{ width: '70%' }}
          >
            {dataCategories.map((cat) => (
              <option key={cat.id}>{cat.name}</option>
            ))}
          </Form.Control>
        </div>
        {getValues('category') === 'books' && (
          <div className="form-group">
            <label>Isbn</label>
            <input name="isbn" className="form-control" placeholder="Enter isbn" ref={register} />
            {errors.isbn && <p>{errors.isbn.message}</p>}
          </div>
        )}
        {getValues('category') === 'books' && (
          <div className="form-group">
            <label>Class</label>
            <Form.Control
              as="select"
              ref={register}
              name="class"
              className="form-control"
              style={{ width: '70%' }}
            >
              {dataClasses.map((clss) => (
                <option key={clss.id}>{clss.name}</option>
              ))}
            </Form.Control>
          </div>
        )}
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
