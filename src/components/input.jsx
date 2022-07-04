import React from 'react'

export default function input(props) {
  return (
    <div className='mb-6'>
      <label htmlFor="price" className="block text-lg font-medium text-dark-lila">
        {props.labelName}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm"></span>
        </div>
        <input
          type={props.type}
          name="price"
          id="price"
          className="block w-full pl-4 pr-12 py-2 rounded-2xl text-lg bg-slate-200"
          placeholder={props.placeholder}
          required={props.isRequired}
        />
      </div>
    </div>
  )
}
