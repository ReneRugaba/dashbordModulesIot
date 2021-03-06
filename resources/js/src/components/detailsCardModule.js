import React from 'react'
import { ObjectConfigApp } from '../../config/objectConfig'
import { GetIntervaleDate } from '../../utilities/getIntervaleDate'
import { MdPowerSettingsNew } from "react-icons/md";


export const DetailsCardModule = (props) => {

    return (
        <div className="containerCardDetails">
            {!props.module.activate_status && (
                <div onClick={()=>props.updateStatusModuleMethode(props.module)} className='bg-green-700 w-6 p-1 flex justify-center mt-2 ml-2 rounded-full cursor-pointer'>
                    <MdPowerSettingsNew color={"white"} />
                </div>)}
            <h1 className='text-center'>Matricule: <span className='bg-blue-700 p-1 rounded-md text-white font-bold'>{props.module.matricule}</span>
            </h1>
            <h3 className='text-center mt-2'>Module type: <span className='bg-blue-700 p-1 rounded-md text-white font-bold'> {props.typesModule.type_name}</span></h3>
            <div className='w-full flex justify-center'>
                <img src={`${ObjectConfigApp.imgBaseUrl}${props.module.photo_path}`} className="w-1/4 mt-2" />
            </div>
            <div className='text-center'>
                <h3>Status: <span className=
                    {
                        props.module.activate_status ? 'text-white bg-green-700 rounded p-1' : 'text-white bg-red-700 rounded p-1 animate-pulse'
                    }>
                    {
                        props.module.activate_status ? "Activeted" : "Defective"

                    }
                </span>
                </h3>
                <h3>
                    Activation time:
                    <span className={props.module.activate_status ? 'text-green-800' : 'text-red-800'}>
                        {GetIntervaleDate(props.module.created_at)}
                    </span>
                </h3>
                <h3 className='font-bold text-blue-600'>Description:</h3>
                <p className='text-xs px-4'>{props.module.desciption}</p>
            </div>
        </div>
    )
}