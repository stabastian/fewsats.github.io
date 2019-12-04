import React from 'react'
import clsx from 'clsx'

const Select = ({ disabled, ...rest }) => {
  return (
    <select
      className={clsx('form-select block w-full mt-1 border border-gray-200')}
      disabled={disabled}
      {...rest}
    />
  )
}

export default Select
