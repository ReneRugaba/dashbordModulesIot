import GetModuleDto from "App/Dto/getModuleDto";
import ModuleDetailsDto from "App/Dto/moduleDetailsDto";





export default interface DashModuleInterface{

    getAllModule(page: number,devective:boolean):Promise<GetModuleDto>
    
    getmodulesinformations(id:number):Promise<ModuleDetailsDto|undefined>
}