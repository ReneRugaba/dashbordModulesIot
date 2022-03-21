import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { InputGeneric, SelectGeneric, TextAreaGeneric } from '../shared/customInput'
import * as yup from 'yup'
import { ButtonGeneric } from '../shared/buttonGeneric'


export const CreateModule = (props) => {

    const createModuleform=(formObject)=>{
        console.log(formObject)
        formObject.type_module_id=Number(formObject.type_module_id)
        formObject.activate_status=Boolean(formObject.activate_status)
        props.createModule(formObject)
                
    }

    const schema = yup.object({
        desciption: yup.string().matches(/^[^ !"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+$/g,"Special characteres no allowed!!").min(6)
    })

    const arrayType = []
    props.typeModule.map(modType => {
        arrayType.push({ value: modType.id, label: modType.type_name })
    })
    return (
        <div>
            <h3 className="titleForm text-center font-bold mt-6 mb-4">Create Module</h3>
            <Formik
                onSubmit={createModuleform}
                initialValues={{
                    desciption: "",
                    photo_path: "",
                    activate_status: Boolean(""),
                    type_module_id: Number("")
                }}
                validationSchema={schema}
                
            >
                {(({ handleChange }) => (
                    <Form encType='multipart/form-data'>
                        <div className='grid h-5  gap-4 mx-4'>
                            <Field
                                as="select"
                                name="activate_status"
                                className={`text-blackfont-bold placeholder-gray-600 w-full px-4 py-2.5 mt-1 text-base 
                                transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 
                                focus:border-blueGray-500 focus:bg-white  focus:outline-none 
                                focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 text-center`}
                                onChange={handleChange}
                            >
                                <option>----select activate_status----</option>
                                {[{ value: false, label: "Defective" }, { value: true, label: "Activated" }].map((items, key) => (
                                    <option key={key} value={items.value}>{items.label}</option>
                                ))}
                            </Field>
                            <div className="font-bold text-red-500 px-5 py-2">
                                <ErrorMessage name="activate_status" />
                            </div>

                            <Field
                                as="select"
                                name="type_module_id"
                                className={`text-blackfont-bold placeholder-gray-600 w-full px-4 py-2.5 mt-1 text-base 
                                transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 
                                focus:border-blueGray-500 focus:bg-white  focus:outline-none 
                                focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 text-center`}
                                onChange={handleChange}
                            >
                                <option>----select type_module_id----</option>
                                {arrayType.map((items, key) => (
                                    <option key={key} value={items.value}>{items.label}</option>
                                ))}
                            </Field>
                            <div className="font-bold text-red-500 px-5 py-2">
                                <ErrorMessage name="activate_status" />
                            </div>


                            <InputGeneric wigthInput="w-full"
                                type="file" handleChange={handleChange}  name="photo_path"
                                label="path photo" />

                            <TextAreaGeneric wigthInput='md:w-full w-full' name="desciption" type='text' label='desciption' />
                            <div className='grid grid-cols-2 gap-4 p-4'>
                                <ButtonGeneric wigthButton="w-full" />
                                <ButtonGeneric typeButton="button" hoverBgButton="hover:bg-red-700" textColor="text-white" bgColor="bg-red-500" onClick={() => props.setShowModal(false)} textContent="Cancel" wigthButton="w-full" />
                            </div>
                        </div>
                    </Form>
                ))}
            </Formik>
        </div>
    )
}