import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import './Signup.css'
import axios from 'axios'

const CreateForm = () => {
  const { register, handleSubmit, errors, watch, setError } = useForm({ criteriaMode: 'all' })
  const password = useRef({})
  password.current = watch('password', '')
  const history = useHistory()
  const onSubmit = (data) => {
    console.log(data)
    axios({
      method: 'post',
      url: '/api/auth/registerUser',
      data,
    })
      .then((res) => {
        console.log(res)
        history.push({
          pathname: '/',
        })
      })
      .catch((e) => {
        if (e.response.data.errors[0]) {
          setError(e.response.data.errors[0].field, {
            type: 'manual',
            message: e.response.data.errors[0].message,
          })
        }
      })
  }
  return (
    <div className="col-lg-4 offset-lg-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Sign Up</h3>
        <div className="form-group">
          <label>SFSU Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="SFSU email"
            ref={register({
              required: 'Enter your SFSU email',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[edu]{2,4}$/i,
                message: 'Enter a SFSU email',
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            placeholder="Password"
            name="password"
            type="password"
            ref={register({
              required: 'You must specify a password',
              minLength: {
                value: 8,
                message: 'Password must have at least 8 characters',
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            placeholder="Confirm Password"
            name="password_repeat"
            type="password"
            ref={register({
              validate: (value) => value === password.current || 'The passwords do not match',
            })}
          />
          {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
        </div>
        <div>
          <input
            ref={register({ required: 'Please accept terms and conditions' })}
            name="terms"
            type="checkbox"
          />
          {errors.terms && <p>{errors.terms.message}</p>}
          <a href="/"> I agree to the terms and conditions</a>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default CreateForm
