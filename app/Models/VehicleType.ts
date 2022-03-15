import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Vehicle from './Vehicle'

export default class VehicleType extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public vehicle_type:string

  @column()
  public passenger_max:number

  @hasMany(() => Vehicle)
  public posts: HasMany<typeof Vehicle>

}
