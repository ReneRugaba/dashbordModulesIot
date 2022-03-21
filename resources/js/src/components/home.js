import React, { useEffect, useState } from "react"
import { useAxiosCenter } from "../../axioCenter"
import { CardModule } from "./cardModule"
import { MdAddAlert, MdAddBox,MdListAlt } from "react-icons/md";
import { RingLoader } from 'react-spinners'
import { Pagination } from "./pagination";
import { ModalForm } from "./modalForm";
import {  useToasts } from 'react-toast-notifications'

export const Home = () => {

    const [moduleDto, setmoduleDto] = useState([])
    const [typeModule, setTypeModule] = useState([])
    const { getAllModuleDto,createModule } = useAxiosCenter()
    const [page, setPage] = useState(1)
    const [totalPage,setTotalPage]=useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [showModal,setShowModal]=useState(false)
    const [defective,setDefective]=useState(false)
    const [toogleToast,setToogleToast]=useState(true)
    const {addToast}=useToasts()

    useEffect(() => {
        getAllModuleDto(page,defective)
            .then(res => {
                setTotalPage(res.data.modulesArray.meta.last_page)
                setmoduleDto(res.data.modulesArray.data)
                setTypeModule(res.data.typesModules)
                
                if(res.data.modulesArray.data.filter(item=>item.activate_status===false && toogleToast).length>0){
                    addToast(`${res.data.modulesArray.data.filter(item=>item.activate_status===false && toogleToast).length} modules are defective.Please be aware of the situation!!!`,{
                        placement:"bottom-center",
                        appearance: 'error',
                        autoDismiss:true
                    })
                    setToogleToast(false)
                }

                setIsLoading(false)
            })
    }, [page,showModal,defective])



    const changePage=(page)=>{
        if(page<1){
            page=1
        }else if(page>totalPage){
            page=totalPage
        }else{
            page=page
        }
    
      
        setPage(page)
       
    }

    
    const createModuleform=(module)=>{
        createModule(module).then(res=>{
            setShowModal(false)
        })
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
                {
                !defective?moduleDto.filter(item=>item.activate_status===false).length>0&&(<MdAddAlert onClick={()=>setDefective(true)} className="text-red-800 animate-pulse hover:text-red-800 cursor-pointer" />)
                :
                (<MdListAlt onClick={()=>setDefective(false)} className="text-green-700"/>)
                }
            </div>
            <div className="cardContainer">
                {moduleDto.map(card => {
                    return (
                        <CardModule key={card.id} module={card} />
                    )
                })}
            </div>
            <Pagination page={page}  setPage={changePage}/>
            <ModalForm createModule={createModuleform} setShowModal={setShowModal} typeModule={typeModule} showModal={showModal}/>
        </div>
    )
}