import { useParams } from "react-router-dom"
import React from 'react'


export const DetailsModule=()=>{
    

    const params=useParams()

    return(
        <h1>Hello id {params.id}</h1>
    )
}