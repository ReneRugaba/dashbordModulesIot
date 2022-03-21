import { useParams } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import { useAxiosCenter } from "../../axioCenter"
import { DetailsCardModule } from "./detailsCardModule"
import { RingLoader } from "react-spinners"
import { GraphDetailsModule } from "./graphDetailsModule"
import { VehicleModuleConcerned } from "./vehicleModuleConcerned"
import { HistoryErrorModule } from "./historyErrorsModule"
import { useToasts } from "react-toast-notifications"



export const DetailsModule = () => {


    const params = useParams()
    const { getModuleDetails,updateStatusModule } = useAxiosCenter()
    const [module, setModule] = useState({})
    const [dataTypeModuleVehicle,setDataTypeModuleVehicle]=useState({})
    const [currentYears,setCurrentYears]=useState({})
    const [isLoading, setIsLoadin] = useState(true)
    const [typesModule,setTypesModule]= useState({})
    const [vehicleDatails,setVehicleDatails]=useState({})
    const [vehicleType,setVehicleType]=useState({})
    const [errorListed,setErrorListed]=useState({})
    const {addToast}=useToasts()

    useEffect(() => {
        getModuleDetails(Number(params.id))
            .then(res => {
                console.log(res.data)
                setModule(res.data.module)
                setDataTypeModuleVehicle(res.data.dataModule)
                setCurrentYears(res.data.currentYears)
                setTypesModule(res.data.typesModule)
                setVehicleDatails(res.data.vehicleDatails)
                setVehicleType(res.data.vehicleType)
                setErrorListed(res.data.errorListed)
               
                setIsLoadin(false)
            })
            .catch(err => console.log(err))
    }, [])

    const updateStatusModuleMethode=(module)=>{
        updateStatusModule(module)
                .then(res=>{
                    setModule(res.data)
                    addToast('Module success restarted!',{
                        appearance: 'success',
                        autoDismiss: true,
                    })
                })
                .catch(err=>console.log(err))
    }

    if (isLoading) {
        return (
            <div className="max-h-full flex justify-center mt-14  text-green-800">
                <RingLoader color={"red"} />
            </div>
        )
    }
    return (
        <div className="containerDetails">
            <DetailsCardModule updateStatusModuleMethode={updateStatusModuleMethode} module={module} typesModule={typesModule} />
            <GraphDetailsModule currentYears={currentYears} dataArray={dataTypeModuleVehicle} />
            <VehicleModuleConcerned  currentModule={module} vehicleType={vehicleType} vehicleDatails={vehicleDatails}/>
            <HistoryErrorModule errorListed={errorListed}/>
        </div>
    )
}