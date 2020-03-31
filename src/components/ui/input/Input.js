import React from 'react'
import classes from './Input.module.css'

function isInvalid({valid, touched, shoudValidate}) {
  return !valid && shoudValidate && touched
}

const Input = props => {
  const inputType = props.type || 'text'

  const inputField = [classes.inputField]

  const cls = [
    classes.Input
  ]

  if(isInvalid(props)) {
    cls.push(classes.invalid)
  }

  const htmlFor = `${inputType}-${Math.random()}`

  return(
    <div className={cls.join(' ')}>
      {/*<label htmlFor="">{props.label}</label>*/}
      <input
        className={inputField.join(' ')}
        type={inputType}
        id={htmlFor}
        placeholder={props.label}
        value={props.value}
        onChange={props.onChange}
      />

      {
        isInvalid(props)
          ? <span>{props.errorMessage}</span>
          : null
      }
    </div>
  )
}
export default Input