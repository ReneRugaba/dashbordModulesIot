import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import LogsModule from './LogsModule'
import ErrorsListed from './ErrorsListed'
import PassengersCount from './PassengersCount'
import TravelTicket from './TravelTicket'
import FuelConsumption from './FuelConsumption'
import RouteTraveled from './RouteTraveled'

export default class Module extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public matricule:string

  @column()
  public desciption:string

  @column()
  public photo_path:string

  @column()
  public activate_status:boolean

  @column()
  public type_module_id:number

  @column()
  public vehicle_id:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => LogsModule)
  public profile: HasMany<typeof LogsModule>

  @hasMany(() => ErrorsListed)
  public errorsListed: HasMany<typeof ErrorsListed>

  @hasMany(() => PassengersCount)
  public passengersCount: HasMany<typeof PassengersCount>

  @hasMany(() => TravelTicket)
  public travelTicket: HasMany<typeof TravelTicket>

  @hasMany(() => FuelConsumption)
  public fuelConsumption: HasMany<typeof FuelConsumption>

  @hasMany(() => RouteTraveled)
  public routeTraveled: HasMany<typeof RouteTraveled>

  @beforeCreate()
  public static async createCustomNbCustomer(module:Module){
    module.matricule="Mat-Mod"+Math.random().toString(36)
  }
}
