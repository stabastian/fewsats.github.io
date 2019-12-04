import React from 'react'
import clsx from 'clsx'

const Button = ({ full, disabled, ...rest }) => {
  return (
    <button
      className={clsx(
        'bg-black py-2 px-4 text-white border border-black rounded-lg',
        {
          'w-full': full,
          'cursor-not-allowed opacity-25': disabled,
          'hover:bg-white hover:text-black': !disabled
        }
      )}
      style={{ minWidth: '200px' }}
      disabled={disabled}
      {...rest}
    />
  )
}

export default Button
