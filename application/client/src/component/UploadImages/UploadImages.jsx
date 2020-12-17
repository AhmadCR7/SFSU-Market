// 3rd party imports
import ImageUploader from 'react-images-upload'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Resizer from 'react-image-file-resizer'

// My imports

const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      500,
      500,
      'JPEG',
      100,
      0,
      (uri) => {
        resolve(uri)
      },
      'base64'
    )
  })

export const UploadImages = ({ images64, setImages64, setTooManyError }) => {
  const { register, handleSubmit, errors, setValue } = useForm({ criteriaMode: 'all' })

  const onDrop = async (imagesDrop) => {
    setTooManyError('')
    if (imagesDrop.length > 3) {
      setTooManyError('You are trying to upload too many photos. Maximum is 3.')
    }
    imagesDrop.forEach(async (img) => {
      const resized = await resizeFile(img)
      setImages64((i) => [...i, resized])
    })
  }

  const onSubmit = async () => {
    const res = await axios.post('/api/listing/uploadImages', {
      images: images64,
    })
    console.log(res)
  }

  return (
    <ImageUploader
      ref={register}
      withIcon
      buttonText="Choose images"
      withPreview
      style={{
        maxHeight: '300px',
        width: '90%',
        margin: '0 auto 20px auto',
        display: 'block',
        textAlign: 'center',
      }}
      fileContainerStyle={{
        border: 'none',
        boxShadow: 'none',
      }}
      name="imageUpload"
      label="Max file size: 3mb, Accepted extensions: [.jpg, .jpeg, .png, .gif]"
      onChange={onDrop}
      imgExtension={['.jpg', '.jpeg', '.png', '.gif']}
      maxFileSize={3000000} // 3 mb max
    />
  )
}
