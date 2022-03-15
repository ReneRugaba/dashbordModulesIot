import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class PassengersCount extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nb_passengers_by_day:number

  @column()
  public nb_passengers_by_week:number

  @column()
  public nb_passengers_by_month:number

  @column()
  public nb_passengers_by_year:number

  @column()
  public vehicle_id:number
}
