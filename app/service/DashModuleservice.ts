import Database from "@ioc:Adonis/Lucid/Database";
import GetModuleDto from "App/Dto/getModuleDto";
import Module from "App/Models/Module";
import TypeModule from "App/Models/TypeModule";
import DashModuleInterface from "./interface/DashModuleInterface";


export default class DashModuleservice implements DashModuleInterface{

    getAllModule:(page: number,defective:boolean)=> Promise<GetModuleDto>=async(page: number,defective:boolean)=> {
        let limit=8

        let getModuleDto:GetModuleDto={
            modulesArray:!defective ? 
            await Database.from(Module.table).orderBy("id","desc").paginate(page, limit):
            await Database.from(Module.table).where("activate_status",!defective).orderBy("id","desc").paginate(page, limit),
            typesModules:await TypeModule.all()
        }
        return  getModuleDto
    }

    // getmodulesinformations:(id: number)=> Promise<Module> =()=>{
        
    // }
}