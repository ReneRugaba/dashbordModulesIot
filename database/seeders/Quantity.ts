import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Quantity from 'App/Models/Quantity'

export default class QuantitySeeder extends BaseSeeder {
  public async run () {
    await Quantity.createMany([
      {
        in_use:10,
        available:30,
        total:40,
        type_module_id:1
      },
      {
        in_use:10,
        available:30,
        total:40,
        type_module_id:2
      },
      {
        in_use:10,
        available:30,
        total:40,
        type_module_id:3
      },
      {
        in_use:10,
        available:30,
        total:40,
        type_module_id:4
      },
      {
        in_use:10,
        available:30,
        total:40,
        type_module_id:3
      }
    ])
  }
}
