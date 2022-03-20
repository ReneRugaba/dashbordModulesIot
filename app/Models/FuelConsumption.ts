import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class FuelConsumption extends BaseModel {
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
  public module_id: number

  @column()
  public current_year_id: number
}
