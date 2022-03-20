import CurrentYear from "App/Models/CurrentYear";
import ErrorsListed from "App/Models/ErrorsListed";
import FuelConsumption from "App/Models/FuelConsumption";
import LogsModule from "App/Models/LogsModule";
import Module from "App/Models/Module";
import PassengersCount from "App/Models/PassengersCount";
import RouteTraveled from "App/Models/RouteTraveled";
import Travelticket from "App/Models/TravelTicket";
import TypeModule from "App/Models/TypeModule";
import Vehicle from "App/Models/Vehicle";
import VehicleType from "App/Models/VehicleType";


export default class ModuleDetailsDto{

    module:Module|null
    typesModule:TypeModule|null
    vehicle:Vehicle|null
    dataModule:LogsModule[]|null
    errorListed:ErrorsListed[]|null
    dataTypeModuleVehicle:RouteTraveled[]|FuelConsumption[]|PassengersCount[]|Travelticket[]
    currentYears:CurrentYear[]
    vehicleType:VehicleType|null
}