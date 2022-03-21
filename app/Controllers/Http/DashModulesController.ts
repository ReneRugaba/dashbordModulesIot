import { Response } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Module from 'App/Models/Module'
import DashModuleservice from 'App/service/DashModuleservice'
import DashModuleInterface from 'App/service/interface/DashModuleInterface'

export default class DashModulesController {
    private dashModuleserviceInterface:DashModuleInterface=new DashModuleservice()

    getAllModules=async({request,response}:HttpContextContract)=>{
        let page=Number(request.input("page")||1)
        let defective=Boolean(request.input("defective")||false)
        return response.status(200).json(await this.dashModuleserviceInterface.getAllModule(page,defective))
    }

    
    getmoduleinformations=async({request}:HttpContextContract)=>{
        return await this.dashModuleserviceInterface.getmodulesinformations(Number(request.params().id))
    }

    createModule=async({request,response}:HttpContextContract)=>{
        console.log(request.body())
        return response.status(201).json(await this.dashModuleserviceInterface.createModule(request.body() as Module))
    }
    
    updateStatusModule=async({request}:HttpContextContract)=>{
        
        return await this.dashModuleserviceInterface.updateModuleStatus(request.body() as Module)
    }
}
