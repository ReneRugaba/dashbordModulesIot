import React from 'react'
import { Link } from "react-router-dom"
import { ObjectConfigApp } from '../../config/objectConfig'
import { format, intervalToDuration } from 'date-fns'
import {GetIntervaleDate} from '../../utilities/getIntervaleDate'



export const CardModule = (module) => {
    
    return (
        <Link to={`/module/${module.module.id}`} className="linkCardModule">
            <img className="imgCardModule" src={`${ObjectConfigApp.imgBaseUrl}${module.module.photo_path}`} alt="" />
            <div className="divDescriptionCard">
                <h5 className="titleCard">Matricule: {module.module.matricule}</h5>
                <ul>
                    <li className='text-xs font-bold mb-2'>Update at: <span className='text-blue-500'>
                        {
                            format(new Date(module.module.updated_at), 'yyyy-MM-dd')
                        }
                    </span></li>
                    <li className='text-xs font-bold mb-2'>Activation time:
                        <span className='text-blue-500'>
                        {GetIntervaleDate(module.module.created_at)}
                        </span></li>
                    <li className='text-xs font-bold'>Status: <span className=
                        {
                            module.module.activate_status ? 'text-white bg-green-700 rounded p-1' : 'text-white bg-red-700 rounded p-1 animate-pulse'
                        }>
                        {
                            module.module.activate_status ? "Activeted" : "Defective"
                        }</span></li>
                </ul>
            </div>
        </Link>
    )
} 