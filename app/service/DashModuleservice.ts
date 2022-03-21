import Database from "@ioc:Adonis/Lucid/Database";
import GetModuleDto from "App/Dto/getModuleDto";
import ModuleDetailsDto from "App/Dto/moduleDetailsDto";
import Vehicledto from "App/Dto/vehiculeDto";
import CurrentYear from "App/Models/CurrentYear";
import ErrorsListed from "App/Models/ErrorsListed";
import LogsModule from "App/Models/LogsModule";
import Module from "App/Models/Module";
import TypeModule from "App/Models/TypeModule";
import Vehicle from "App/Models/Vehicle";
import VehicleType from "App/Models/VehicleType";
import DashModuleInterface from "./interface/DashModuleInterface";


export default class DashModuleservice implements DashModuleInterface {

    getAllModule: (page: number, defective: boolean) => Promise<GetModuleDto> = async (page: number, defective: boolean) => {
        let limit = 8

        let getModuleDto: GetModuleDto = {
            modulesArray: !defective ?
                await Database.from(Module.table).orderBy("id", "desc").paginate(page, limit) :
                await Database.from(Module.table).where("activate_status", !defective).orderBy("id", "desc").paginate(page, limit),
            typesModules: await TypeModule.all()
        }
        return getModuleDto
    }

    getmodulesinformations: (id: number) => Promise<ModuleDetailsDto | undefined> = async (id: number) => {
        let module = await Database.from(Module.table).where('id', id)
        let typeModule = await TypeModule.findBy('id', module[0].type_module_id)
        let vehicle = await Vehicle.findBy('id', module[0].vehicle_id)
        let searchData = ""
        if (typeModule?.type_name === "route_traveleds_Iot") {
            searchData = "route_traveleds"
        } else if (typeModule?.type_name === "fuel_consumptions_Iot") {
            searchData = "fuel_consumptions"
        } else if (typeModule?.type_name === "passengers_counts_Iot") {
            searchData = "passengers_counts"
        } else {
            searchData = "traveltickets"
        }

        let vehiculedetails: Vehicledto = {
            vehicle: vehicle,
            modulearrayVehicle: vehicle ? await Database.from(Module.table).where('vehicle_id', vehicle.id) : []
        }


        let moduleDetailsDto: ModuleDetailsDto = {
            module: module[0],
            typesModule: typeModule,
            vehicleDatails: vehiculedetails,
            vehicleType: await VehicleType.findBy('id', vehicle?.vehicle_type_id),
            dataModule: await Database.from(LogsModule.table).where('module_id', module[0].id),
            errorListed: await Database.from(ErrorsListed.table).where('modules_id', module[0].id),
            dataTypeModuleVehicle: await Database.from(searchData).where('module_id', module[0].id),
            currentYears: await CurrentYear.all()
        }

        return moduleDetailsDto


    }

    updateModuleStatus = async (module: Module) => {
        module.activate_status = !module.activate_status

        return await (await (Module.findOrFail(module.id))).merge(module).save()
    }
}