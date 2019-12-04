import React from 'react'
import clsx from 'clsx'
import IconInfo from '../components/icon-info'
import ReactTooltip from 'react-tooltip'

const CalculatorRow = ({
  label,
  value,
  name,
  readOnly,
  onChange,
  tip,
  variant
}) => {
  return (
    <tr>
      <td
        className={clsx(
          readOnly ? 'bg-white' : 'bg-gray-200 font-semibold',
          variant === 'long' && 'text-green font-bold',
          variant === 'short' && 'text-red font-bold',
          !variant && 'text-black font-semi-bold',
          'truncate p-1 w-2/3 border border-gray-300'
        )}>
        <div className='flex items-center'>
          <div
            data-tip
            data-for={label}
            className='flex items-center mr-2 ml-1'>
            <IconInfo className='fill-current text-gray-400 hover:text-gray-500 inline-block h-5 w-5 cursor-pointer' />
          </div>
          <ReactTooltip
            id={label}
            event='click focus'
            className='customTooltipTheme'
            globalEventOff='click'
            effect='solid'
            place={'right'}
            clickable>
            <div className='text-xs md:text-sm font-light p-1'>{tip}</div>
          </ReactTooltip>
          <div className='text-sm md:text-base'>{label}</div>
        </div>
      </td>
      <td className='p-1 w-1/3 border border-gray-300'>
        <input
          className={clsx(
            'w-full text-right',
            variant === 'long' && 'text-green font-bold',
            variant === 'short' && 'text-red font-bold',
            !variant && (readOnly ? 'text-black' : 'text-gray-500')
          )}
          type='number'
          name={name}
          onChange={onChange}
          value={value}
          readOnly={readOnly}
          {...(readOnly && { tabIndex: '-1' })}
        />
      </td>
    </tr>
  )
}

export default CalculatorRow
