import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TypeModule from 'App/Models/TypeModule'

export default class TypeModuleSeeder extends BaseSeeder {
  public async run () {
     await TypeModule.createMany([
        {type_name:"route_traveleds_Iot"},
        {type_name:"fuel_consumptions_Iot"},
        {type_name:"passengers_counts_Iot"},
        {type_name:"traveltickets_Iot"},
      ])
  }
}
