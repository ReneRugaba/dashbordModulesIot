import GetModuleDto from "App/Dto/getModuleDto";


export default interface DashModuleInterface{

    getAllModule(page: number):Promise<GetModuleDto>
}