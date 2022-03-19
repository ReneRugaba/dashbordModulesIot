import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'

export default class Module extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public matricule:string

  @column()
  public desciption:string

  @column()
  public photo_path:string

  @column()
  public activate_status:boolean

  @column()
  public type_module_id:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async createCustomNbCustomer(module:Module){
    module.matricule="Mat-Mod"+Math.random().toString(36)
  }
}
