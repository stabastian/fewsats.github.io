import React from 'react'
import clsx from 'clsx'

const Label = ({ className, ...rest }) => {
  return (
    <label
      className={clsx(
        'block text-gray-600 font-bold text-sm',
        className && className
      )}
      {...rest}
    />
  )
}

export default Label
