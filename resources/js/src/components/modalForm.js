import React from 'react'
import { CreateModule } from './createModule'


export const ModalForm = (props) => {


    return (
        <div className={props.showModal?"overflow-y-auto overflow-x-hidden fixed right-0 left-0 mt-6 top-4 z-50 flex justify-center items-center md:inset-0 h-modal h-screen":"hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50  justify-center items-center md:inset-0 h-modal h-screen"} id="popup-modal">
           <div className='w-1/3 h-4/5 bg-white shadow-black shadow-lg rounded-md p-3'>
                <CreateModule createModule={props.createModule} showModal={props.showModal} setShowModal={props.setShowModal} typeModule={props.typeModule}/>
           </div>
        </div>
    )
}