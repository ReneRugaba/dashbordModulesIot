import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { ObjectConfigApp } from '../../config/objectConfig'
import { GetIntervaleDate } from '../../utilities/getIntervaleDate'



export const VehicleModuleConcerned = ({ vehicleType, vehicleDatails, currentModule }) => {



    return (
        <div className='w-full h-full shadow-md shadow-black'>
            <h1 className='font-bold text-center mt-9'>Vehicle concerned informations</h1>
            <div className='containerVehicle'>
                <div className='containerVehicleInfos'>
                    <h4 className='font-bold'>Vehicle details</h4>
                    <div className='w-full flex justify-center mt-5'>
                        <img className='w-1/2' src={`${ObjectConfigApp.imgBaseUrl}${vehicleDatails.vehicle.photo_path}`} />
                    </div>
                    <div className='mt-6 pt-5'>
                        <h1 className='font-bold'>Type: <span className='text-blue-700'>{vehicleType.vehicle_type}</span></h1>
                        <h1 className='font-bold'>Capacity: <span className='text-blue-700'>{vehicleType.passenger_max} </span>prs/max</h1>
                        <h1 className='font-bold'>Matricule: <span className='text-blue-700'>{vehicleDatails.vehicle.registration_nb}</span></h1>
                        <h1 className='font-bold'>Commissioning: <span className='text-blue-700'>{GetIntervaleDate(vehicleDatails.vehicle.release)}</span></h1>
                    </div>

                </div>
                <div className='containerModuleInstall'>
                    <h4 className='font-bold'>Modules install in the vehicle</h4>
                    <div className='grid grid-cols-1 pt-8 px-3'>
                        {vehicleDatails.modulearrayVehicle.map(module => (
                            <button
                                className={
                                    currentModule.id == module.id ?
                                        "bg-blue-500 px-6 py-2 border-b border-gray-200 w-full hover:bg-blue-900 text-white hover:text-white   transition duration-500cursor-pointer"
                                        :
                                        "px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-black transition duration-500cursor-pointer"
                                }
                                key={module.id}
                            >
                                {module.matricule}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}