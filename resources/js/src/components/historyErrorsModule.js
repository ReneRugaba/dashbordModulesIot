import { format } from 'date-fns'
import React from 'react'


export const HistoryErrorModule = ({ errorListed }) => {

    return (
        <div className='w-full h-full shadow-md shadow-black text-center'>
            <h1 className='font-bold mt-9'>Module history</h1>
            <div className="w-full px-3 mt-6">
                {errorListed.length>0?
               ( <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-black bg-gray-200">
                    <tr>
                        <th className='p-2 whitespace-nowrap'>
                            Create at
                        </th>
                        <th className='p-2 whitespace-nowrap'>
                            Error cause
                        </th>
                        <th className='p-2 whitespace-nowrap'>
                            Planed start up
                        </th>
                        <th className='p-2 whitespace-nowrap'>
                            Start up
                        </th>
                    </tr>
                </thead>
                <tbody className='text-sm divide-y divide-gray-100'>
                    {errorListed.map((item,index) => (
                        <tr key={index}>
                            <td  className='p-2 whitespace-nowrap'>
                                {format(new Date(item.created_at),'yyyy/MM/dd')}
                            </td>
                            <td  className='p-2 whitespace-nowrap'>
                                {item.causeerror}
                            </td>
                            <td  className='p-2 whitespace-nowrap'>
                                {format(new Date(item.planned_startup),'yyyy/MM/dd')}
                            </td>
                            <td  className='p-2 whitespace-nowrap'>
                                {format(new Date(item.startup),'yyyy/MM/dd')}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>)
            :
            (
                <h2 className='text-center font-bold '>No errors listed for the moment!</h2>
            )
            }
            </div>
        </div>
    )
}