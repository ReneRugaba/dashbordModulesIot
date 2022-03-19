import axios from "axios"
import { ObjectConfigApp } from "./config/objectConfig"


export const useAxiosCenter=()=>{

    const getAllModuleDto=async(page,defective)=>{
        let params={}
        if(defective){
            params={
                page:page,
                defective:defective
            }
        }else{
            params={
                page:page,
            }
        }
        try {
            return await axios.get(`${ObjectConfigApp.baseUrlApp}/modules`,{
                params:params
            })
        } catch (error) {
            console.log(error.message)
        }
        
    }

    return {
        getAllModuleDto
    }
}