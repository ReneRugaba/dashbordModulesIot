import Database from "@ioc:Adonis/Lucid/Database";
import GetModuleDto from "App/Dto/getModuleDto";
import Module from "App/Models/Module";
import TypeModule from "App/Models/TypeModule";
import DashModuleInterface from "./interface/DashModuleInterface";


export default class DashModuleservice implements DashModuleInterface{

    getAllModule:(page: number)=> Promise<GetModuleDto>=async(page: number)=> {
        let limit=6

        let getModuleDto:GetModuleDto={
            modulesArray:await Database.from(Module.table).orderBy("id","desc").paginate(page, limit),
            typesModules:await TypeModule.all()
        }
        return  getModuleDto
    }
}