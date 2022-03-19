import GetModuleDto from "App/Dto/getModuleDto";



export default interface DashModuleInterface{

    getAllModule(page: number,devective:boolean):Promise<GetModuleDto>
    
}