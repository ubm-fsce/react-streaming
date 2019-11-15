import React from 'react';
import { Field, reduxForm } from 'redux-form';


class StreamForm extends React.Component {
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'> {error} </div>
        </div>);
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label >{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div >
    );
  }

  render() {
    return (
      <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label='Title'></Field>
        <Field name="description" component={this.renderInput} label='Description'></Field>
        <button className='ui primary button'> Submit</button>
      </form >
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter Title !'
  }
  if (!formValues.description) {
    errors.description = 'You must enter Description !'
  }
  return errors;
}

export default reduxForm({
  form: 'streamForm',
  validate: validate
})(StreamForm);

