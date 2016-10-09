import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state)
  return state
  // return {
  //   form: 'MyForm'
  // }
}

export const Raw = ({value: { values } = {}}) =>
  <div>
    <h3>Value</h3>
    <pre>
    {JSON.stringify({values}, null, 2)}
    </pre>
  </div>

const localHandleSubmit = (props) => {
  console.log('arguments.length', arguments.length)
  console.log('localProps', props)
}

const renderInput = ({ input, type, label, meta: { touched, error } })=>
  <div>
    <label>{label}</label>
    <input {...input} placeholder={label} type={type}/>
    {touched && error && <span>{error}</span>}
  </div>

export let MyForm = (props) => { 
  console.log('rendering form...')
  const { dirty, invalid, pristine, registered, reset, handleSubmit, submit, submitting, values } = props
  return <div>
    <form onSubmit={handleSubmit(localHandleSubmit)}>
      <Field name='firstName' component={renderInput} type='text' label='First Name'/>
      <Field name='lastName' component='input' type='text' placeholder='Last Name'/>
      <Field name='email' component='input' type='text' placeholder='Last Name'/>
      <button type='submit' disabled={pristine || submitting}>Submit</button>
      <button type='button' disabled={pristine || submitting} onClick={reset}>Clear</button>
  </form>
  {JSON.stringify(values)}
    </div>
}

const validate = values => {
  const errors = {}
  console.log('validate', values)
  if (!values.firstName) {
    errors.firstName = 'First name is required'
  }
  return errors
}

MyForm = reduxForm({
  form : 'MyForm',
  validate
})(MyForm)

// export default connect(mapStateToProps)(MyForm)
