import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'


export default class Vehicle extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public photo_path:string

  @column()
  public registration_nb:string

  

  @column()
  public vehicle_type_id:number

  @column.dateTime({ autoCreate: true })
  public release: DateTime

  
}
