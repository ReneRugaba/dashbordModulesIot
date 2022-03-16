import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import VehicleType from 'App/Models/VehicleType'

export default class VehicleTypeSeeder extends BaseSeeder {
  public async run () {
    await VehicleType.createMany([
      {vehicle_type:"Bus",passenger_max:50},
      {vehicle_type:"truck",passenger_max:4},
      {vehicle_type:"Van",passenger_max:7}
    ])
  }
}
