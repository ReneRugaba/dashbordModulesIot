import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
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
    
}
