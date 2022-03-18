import axios from "axios"
import { ObjectConfigApp } from "./config/objectConfig"


export const useAxiosCenter=()=>{

    const getAllModuleDto=async(page)=>{
        try {
            return await axios.get(`${ObjectConfigApp.baseUrlApp}/modules`,{
                params:{
                    page:page
                }
            })
        } catch (error) {
            console.log(error.message)
        }
        
    }

    return {
        getAllModuleDto
    }
}