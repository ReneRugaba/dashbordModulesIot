import GetModuleDto from "App/Dto/getModuleDto";
import Module from "App/Models/Module";




export default interface DashModuleInterface{

    getAllModule(page: number,devective:boolean):Promise<GetModuleDto>
    
    // getmodulesinformations(id:number):Promise<Module>
}