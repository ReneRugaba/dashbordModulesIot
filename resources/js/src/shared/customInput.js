import { ErrorMessage, Field } from "formik"
import React from 'react'





/**
 * this generic input need to be use with props type InputGenInterface
 * you can create imput texte, email, number, file, image, password
 * @param InputGenInterface 
 * @returns JSX.Element
 */
export const InputGeneric = ({ name, type, label, textColor, fontWeigth, bgInput, wigthInput, ...rest }) => {



    return (
        <div>
            <Field placeholder={label}
                className={`${textColor ? textColor : 'text-black'} ${fontWeigth ? fontWeigth : 'font-bold'}
                ${bgInput ? bgInput : 'placeholder-gray-600'} ${wigthInput && wigthInput} px-4 py-2.5 mt-2 text-base 
                transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 
                focus:border-blueGray-500 focus:bg-white  focus:outline-none 
                focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 z-0`}
                name={name}
                type={type}
                {...rest} />

            <div className="font-bold text-red-500 px-5 py-2">
                <ErrorMessage name={name} />
            </div>
        </div>
    )
}


/**
 * This input is a generic textarea
 * 
 * @param InputGenInterface 
 * @returns {JSX.element}
 */
export const TextAreaGeneric = ({ name, type, label, textColor, fontWeigth, bgInput, wigthInput, rows, ...rest }) => {
    return (
        <div>
            <Field placeholder={label}

                className={`${textColor ? textColor : 'text-black'} ${fontWeigth ? fontWeigth : 'font-bold'}
                ${bgInput ? bgInput : 'placeholder-gray-600'} ${wigthInput && wigthInput} p-3 mt-2 text-base 
                 border-transparent rounded-lg bg-gray-200 
                focus:border-blueGray-500 focus:bg-white  focus:outline-none 
                focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400`}
                name={name}
                as="textarea"
                rows={rows ? rows : "5"}
                {...rest} />

            <div className="font-bold text-red-500 px-5 py-2">
                <ErrorMessage name={name} />
            </div>
        </div>
    )
}


/**
 * this input is a generic datepicker
 * 
 * @param InputGenInterface 
 * @returns {JSX.element}
 */
export const DatePickerGeneric = ({ name, type, label, textColor, fontWeigth, bgInput, wigthInput, handlechange, ...rest }) => {


    return (
        <div>
            <input
                type="date"
                className={`${textColor ? textColor : 'text-black'} ${fontWeigth ? fontWeigth : 'font-bold'}
                ${bgInput ? bgInput : 'placeholder-gray-600'} ${wigthInput && wigthInput} px-4 py-2.5 mt-2 text-base 
                transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 
                focus:border-blueGray-500 focus:bg-white  focus:outline-none 
                focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400`}
                name={name}
                onChange={handlechange}
                {...rest}
            />
            <div className="font-bold text-red-500 px-5 py-2">
                <ErrorMessage name={name} />
            </div>
        </div>
    )
}



/**
 * This input is a generic select 
 * @param InputGenInterface 
 * @returns {JSX.Element}
 */
export const SelectGeneric = ({ name, optionsValues, textColor, fontWeigth, bgInput, wigthInput, handlechange, label, ...rest }) => {

    return (
        <div>
            <select
                as="select"
                name={name}
                className={`${textColor ? textColor : 'text-black'} ${fontWeigth ? fontWeigth : 'font-bold'}
                ${bgInput ? bgInput : 'placeholder-gray-600'} ${wigthInput && wigthInput} w-full px-4 py-2.5 mt-3 text-base 
                transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 
                focus:border-blueGray-500 focus:bg-white  focus:outline-none 
                focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 text-center`}
                onChange={handlechange}
            >
                <option>----select {label}----</option>
                {optionsValues?.map((items, key) => (
                    <option key={key} value={items.value}>{items.label}</option>
                ))}
            </select>
            <div className="font-bold text-red-500 px-5 py-2">
                <ErrorMessage name={name} />
            </div>
        </div>
    )
}