import React from 'react'

export default function input(props) {
  return (
    <div className='mb-6'>
      <label htmlFor="price" className="block text-lg font-medium text-light-green">
        {props.labelName}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm"></span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full pl-4 pr-12 py-1.5 rounded-2xl"
          placeholder={props.placeholder}
        />
      </div>
    </div>
  )
}
