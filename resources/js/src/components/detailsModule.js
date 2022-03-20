import { useParams } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import { useAxiosCenter } from "../../axioCenter"
import { DetailsCardModule } from "./detailsCardModule"
import { RingLoader } from "react-spinners"
import { GraphDetailsModule } from "./graphDetailsModule"



export const DetailsModule = () => {


    const params = useParams()
    const { getModuleDetails } = useAxiosCenter()
    const [module, setModule] = useState({})
    const [isLoading, setIsLoadin] = useState(true)

    useEffect(() => {
        getModuleDetails(Number(params.id))
            .then(res => {
                console.log(res.data)
                setModule(res.data.module)
                setIsLoadin(false)
            })
            .catch(err => console.log(err))
    }, [])
    if (isLoading) {
        return (
            <div className="max-h-full flex justify-center mt-14 text-green-800">
                <RingLoader color={"red"} />
            </div>
        )
    }
    return (
        <div className="containerDetails">
            <DetailsCardModule module={module} />
            <GraphDetailsModule/>
        </div>
    )
}