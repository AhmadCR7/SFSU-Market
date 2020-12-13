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
      300,
      300,
      'JPEG',
      50,
      0,
      (uri) => {
        resolve(uri)
      },
      'base64'
    )
  })

export const UploadImages = () => {
  const [images, setImages] = useState()
  const [images64, setImages64] = useState([])
  const { register, handleSubmit, errors } = useForm({ criteriaMode: 'all' })

  const onDrop = async (imagesDrop) => {
    imagesDrop.forEach(async (img) => {
      const resized = await resizeFile(img)
      setImages64((i) => [...i, resized])
    })
  }

  const onSubmit = () => {
    axios.post('/api/listing/uploadImages', {
      images: images64,
    })
  }

  console.log(images64)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ImageUploader
        ref={register}
        withIcon
        buttonText="Choose images"
        withPreview
        onChange={onDrop}
        imgExtension={['.jpg', '.jpeg', '.png', '.gif']}
        maxFileSize={5000000} // 5 mb max
      />
      {images64.map((i) => (
        <img height={100} src={i} alt="preview" />
      ))}
      <button type="submit">Submit</button>
    </form>
  )
}
