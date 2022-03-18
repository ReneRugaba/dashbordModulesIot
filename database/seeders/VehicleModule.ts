import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { DateTime } from 'luxon'

export default class VehicleModuleSeeder extends BaseSeeder {
  public async run () {
    await Database.table('vehicle_modules').multiInsert([
      {
        module_id:1,
        vehicle_id:1,
        created_at:DateTime.fromISO("2020-05-25T09:08:34.123"),
        updated_at:DateTime.fromISO("2020-05-25T09:08:34.123")
      },
      {
        module_id:2,
        vehicle_id:2,
        created_at:DateTime.fromISO("2020-05-25T09:08:34.123"),
        updated_at:DateTime.fromISO("2020-05-25T09:08:34.123")
      },
      {
        module_id:3,
        vehicle_id:3,
        created_at:DateTime.fromISO("2020-05-25T09:08:34.123"),
        updated_at:DateTime.fromISO("2020-05-25T09:08:34.123")
      },
      {
        module_id:4,
        vehicle_id:4,
        created_at:DateTime.fromISO("2020-05-25T09:08:34.123"),
        updated_at:DateTime.fromISO("2020-05-25T09:08:34.123")
      },
      {
        module_id:5,
        vehicle_id:5,
        created_at:DateTime.fromISO("2020-05-25T09:08:34.123"),
        updated_at:DateTime.fromISO("2020-05-25T09:08:34.123")
      },
      {
        module_id:6,
        vehicle_id:6,
        created_at:DateTime.fromISO("2020-05-25T09:08:34.123"),
        updated_at:DateTime.fromISO("2020-05-25T09:08:34.123")
      },
      {
        module_id:7,
        vehicle_id:7,
        created_at:DateTime.fromISO("2020-05-25T09:08:34.123"),
        updated_at:DateTime.fromISO("2020-05-25T09:08:34.123")
      },
      {
        module_id:8,
        vehicle_id:8,
        created_at:DateTime.fromISO("2020-05-25T09:08:34.123"),
        updated_at:DateTime.fromISO("2020-05-25T09:08:34.123")
      },
      {
        module_id:9,
        vehicle_id:9,
        created_at:DateTime.fromISO("2020-05-25T09:08:34.123"),
        updated_at:DateTime.fromISO("2020-05-25T09:08:34.123")
      },
    ])
  }
}
