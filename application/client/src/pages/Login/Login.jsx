import React from 'react'
import { useForm } from 'react-hook-form'
import './login.css'

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm({ criteriaMode: 'all' })
  const onSubmit = (data) => console.log(data)

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
              required: true,
            })}
          />
          {errors?.email?.types?.required && <p>SFSU email required</p>}
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
      </form>
    </div>
  )
}

export default LoginForm
