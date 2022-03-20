import { BaseModel, column, HasMany, hasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Module from './Module'
import Quantity from './Quantity'


export default class TypeModule extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public type_name:string

  @hasMany(()=>Module)
  public module:HasMany<typeof Module>

  @hasOne(() => Quantity)
  public profile: HasOne<typeof Quantity>

}
