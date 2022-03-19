import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ErrorsListed extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public causeerror:string

  @column.dateTime()
  public planned_startup:DateTime

  @column.dateTime()
  public startup:DateTime

  @column()
  public modules_id:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime
}
