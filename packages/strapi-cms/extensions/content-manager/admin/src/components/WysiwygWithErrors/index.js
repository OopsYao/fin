import React from 'react'
import Editor from '../Editor'

const WysiwygWithErrors = ({
  inputDescription,
  errors = [],
  label,
  name,
  noErrorsDescription = false,
  onChange, // : ({ target: { name, value } }) => {} 保存这个值至该field
  value,
}) => {
  return <Editor />
}

export default WysiwygWithErrors
