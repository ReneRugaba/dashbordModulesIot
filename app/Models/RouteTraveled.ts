import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class RouteTraveled extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  public km_by_day: number

  @column()
  public km_by_week: number

  @column()
  public km_by_month: number

  @column()
  public km_by_year: number

  @column()
  public vehicle_id: number

  @column()
  public current_year_id: number
}
