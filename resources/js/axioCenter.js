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

    const getModuleDetails=async(id)=>{
        try {
            return await axios.get(`${ObjectConfigApp.baseUrlApp}/modules/${id}`)
        } catch (error) {
            console.log(error.message)
        }
    }

    const createModule=async(module)=>{
        try {
            return await axios.post(`${ObjectConfigApp.baseUrlApp}/modules/`,module)
        } catch (error) {
            console.log(error.message)
        }
    }

    const updateStatusModule=async(module)=>{
        try {
            return await axios.put(`${ObjectConfigApp.baseUrlApp}/modules/`,module)
        } catch (error) {
            
        }
    }

    return {
        getAllModuleDto,
        getModuleDetails,
        createModule,
        updateStatusModule
    }
}