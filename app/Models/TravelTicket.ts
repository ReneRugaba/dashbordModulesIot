import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TravelTicket extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public by_day: number

  @column()
  public by_week: number

  @column()
  public by_month: number

  @column()
  public by_year: number

  @column()
  public vehicle_id: number
}
