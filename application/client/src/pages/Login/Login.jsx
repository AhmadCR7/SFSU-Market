import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import './login.css'
import axios from 'axios'
import { useQueryCache } from 'react-query'

const LoginForm = () => {
  const { register, handleSubmit, errors, setError } = useForm({ criteriaMode: 'all' })
  const history = useHistory()
  const queryCache = useQueryCache()

  const onSubmit = (data) => {
    console.log(data)
    axios({
      method: 'post',
      url: '/api/auth/loginUser',
      data,
    })
      .then((res) => {
        queryCache.refetchQueries('currentUser')
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
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            ref={register({
              required: 'please enter a password',
              minLength: {
                value: 6,
                message: 'password must be atleast 6 characters',
              },
            })}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
        </div>
        <p className="forgot-password text-right">
          <a href="/">Forgot Password?</a>
        </p>

        <div>
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        </div>
        <p style={{ marginTop: '1rem', textAlign: 'center' }}>
          <a href="/signup">Don't have an account yet? Sign up!</a>
        </p>
      </form>
    </div>
  )
}

export default LoginForm
