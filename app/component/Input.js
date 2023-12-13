import React from 'react'

export default function Input({label, inputType, labelClassName,inputClassName='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' , divClassName='mt-1' , disOrEnable=false, placeholder }) {
    return (
        <div className={divClassName}>
            <label htmlFor={label} className={labelClassName}>
                {label}
            </label>
            <div >
                <input
                    type={inputType}
                    name={label}
                    id={label}
                    placeholder={placeholder}
                    disabled={disOrEnable}

                    autoComplete="given-name"
                    className={inputClassName}
                />
            </div>
        </div>
    )
}
