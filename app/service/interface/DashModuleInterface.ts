import GetModuleDto from "App/Dto/getModuleDto";
import ModuleDetailsDto from "App/Dto/moduleDetailsDto";
import Module from "App/Models/Module";





export default interface DashModuleInterface{

    getAllModule(page: number,devective:boolean):Promise<GetModuleDto>
    
    getmodulesinformations(id:number):Promise<ModuleDetailsDto|undefined>

    updateModuleStatus(module:Module):Promise<Module>
}