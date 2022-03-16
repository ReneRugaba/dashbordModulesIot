import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Module from './Module'
import PassengersCount from './PassengersCount'
import TravelTicket from './TravelTicket'
import FuelConsumption from './FuelConsumption'
import RouteTraveled from './RouteTraveled'

export default class Vehicle extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public photo_path:string

  @column()
  public registration_nb:string

  @manyToMany(() => Module)
  public vehicule_modules: ManyToMany<typeof Module>

  @column()
  public vehicle_type_id:number

  @column.dateTime({ autoCreate: true })
  public release: DateTime

  @hasOne(() => PassengersCount)
  public passengersCount: HasOne<typeof PassengersCount>

  @hasOne(() => TravelTicket)
  public travelTicket: HasOne<typeof TravelTicket>

  @hasOne(() => FuelConsumption)
  public fuelConsumption: HasOne<typeof FuelConsumption>

  @hasOne(() => RouteTraveled)
  public routeTraveled: HasOne<typeof RouteTraveled>
}
