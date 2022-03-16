import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import FuelConsumption from './FuelConsumption'
import PassengersCount from './PassengersCount'
import RouteTraveled from './RouteTraveled'
import TravelTicket from './TravelTicket'

export default class CurrentYear extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public year:number

  @hasOne(() => RouteTraveled)
  public routeTraveled: HasOne<typeof RouteTraveled>

  @hasOne(() => FuelConsumption)
  public fuelConsumption: HasOne<typeof FuelConsumption>

  @hasOne(() => PassengersCount)
  public passengersCount: HasOne<typeof PassengersCount>

  @hasOne(() => TravelTicket)
  public travelTicket: HasOne<typeof TravelTicket>

}
