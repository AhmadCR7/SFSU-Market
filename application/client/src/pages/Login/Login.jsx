import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import './login.css'
import axios from 'axios'

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm({ criteriaMode: 'all' })
  const history = useHistory()

  const onSubmit = (data) => {
    console.log(data)
    axios({
      method: 'post',
      url: '/api/auth/loginUser',
      data,
    }).then((res) => {
      console.log(res)
      history.push({
        pathname: '/',
      })
    })
  }

  return (
    <div className="col-lg-4 offset-lg-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Login</h3>
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
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            ref={register({ required: true, minLength: 8 })}
          />

          {errors?.password?.types?.required && <p>password required</p>}
          {errors?.password?.types?.minLength && <p>password has to be 8 or more character</p>}
        </div>

        <div>
          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="/">Forgot Password?</a>
        </p>
      </form>
    </div>
  )
}

export default LoginForm
