import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Quantity extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public in_use: number

  @column()
  public available: number

  @column()
  public total: number

  @column()
  public type_module_id:number
}
