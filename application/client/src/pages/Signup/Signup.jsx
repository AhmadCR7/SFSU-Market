import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import './Signup.css'

const CreateForm = () => {
  const { register, handleSubmit, errors, watch } = useForm({ criteriaMode: 'all' })
  const password = useRef({})
  password.current = watch('password', '')
  const onSubmit = (data) => console.log(data)
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
              required: true,
            })}
          />
          {errors?.email?.types?.required && <p>SFSU email required</p>}
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

        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="/login">sign in?</a>
        </p>
      </form>
    </div>
  )
}

export default CreateForm
