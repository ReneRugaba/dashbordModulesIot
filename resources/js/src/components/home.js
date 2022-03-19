import React, { useEffect, useState } from "react"
import { useAxiosCenter } from "../../axioCenter"
import { CardModule } from "./cardModule"
import { MdAddAlert, MdAddBox } from "react-icons/md";
import { SyncLoader, SkewLoader, RingLoader } from 'react-spinners'
import { Pagination } from "./pagination";
import { ModalForm } from "./modalForm";

export const Home = () => {

    const [moduleDto, setmoduleDto] = useState([])
    const [typeModule, setTypeModule] = useState([])
    const { getAllModuleDto } = useAxiosCenter()
    const [page, setPage] = useState(1)
    const [totalPage,setTotalPage]=useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [showModal,setShowModal]=useState(false)

    useEffect(() => {
        getAllModuleDto(page)
            .then(res => {
                setTotalPage(res.data.modulesArray.meta.last_page)
                setmoduleDto(res.data.modulesArray.data)
                setTypeModule(res.data.typesModules)
                setIsLoading(false)
            })
    }, [page,showModal])



    const changePage=(page)=>{
        if(page<1){
            page=1
        }else if(page>totalPage){
            page=totalPage
        }else{
            page=page
        }
    
        setIsLoading(true)
        setPage(page)
        setIsLoading(false)
    }

    if (isLoading) {
        return (
            <div className="max-h-full flex justify-center mt-14 text-green-800">
                <RingLoader color={"red"} />
            </div>
        )
    }

    return (
        <div className="h-screen">
            <h1 className="text-center font-bold text-2xl mt-11">Modules dashboard management:</h1>
            <div className="text-4xl flex justify-center mt-6">
                <MdAddBox onClick={()=>setShowModal(true)} className="mr-2 text-green-800 cursor-pointer hover:animate-bounce" />
                <MdAddAlert className="text-red-800 animate-pulse hover:text-red-800 cursor-pointer" />
            </div>
            <div className="cardContainer">
                {moduleDto.map(card => {
                    return (
                        <CardModule key={card.id} module={card} />
                    )
                })}
            </div>
            <Pagination page={page}  setPage={changePage}/>
            <ModalForm setShowModal={setShowModal} typeModule={typeModule} showModal={showModal}/>
        </div>
    )
}