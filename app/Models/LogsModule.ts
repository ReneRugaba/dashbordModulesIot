import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class LogsModule extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public datamesurement_by_day:number

  @column()
  public datamesurement_by_week:number

  @column()
  public datamesurement_by_month:number

  @column()
  public datamesurement_by_year:number

  @column()
  public module_id:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

}
