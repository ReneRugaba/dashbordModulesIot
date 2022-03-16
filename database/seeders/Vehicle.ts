import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Vehicle from 'App/Models/Vehicle'
import { DateTime } from 'luxon'

export default class VehicleSeeder extends BaseSeeder {
  public async run() {
    await Vehicle.createMany([
      {
        photo_path: "busModule.png",
        registration_nb: "BUS-MAT" + Math.random().toString(36),
        release:DateTime.fromISO("2020-05-25T09:08:34.123"),
        vehicle_type_id:1,
      },
      {
        photo_path: "busModule.png",
        registration_nb: "BUS-MAT" + Math.random().toString(36),
        release:DateTime.fromISO("2020-05-25T09:08:34.123"),
        vehicle_type_id:2,
      },
      {
        photo_path: "busModule.png",
        registration_nb: "BUS-MAT" + Math.random().toString(36),
        release:DateTime.fromISO("2020-05-25T09:08:34.123"),
        vehicle_type_id:3,
      },
      {
        photo_path: "busModule.png",
        registration_nb: "BUS-MAT" + Math.random().toString(36),
        release:DateTime.fromISO("2020-05-25T09:08:34.123"),
        vehicle_type_id:2,
      },
      {
        photo_path: "busModule.png",
        registration_nb: "BUS-MAT" + Math.random().toString(36),
        release:DateTime.fromISO("2020-05-25T09:08:34.123"),
        vehicle_type_id:1,
      },
      {
        photo_path: "busModule.png",
        registration_nb: "BUS-MAT" + Math.random().toString(36),
        release:DateTime.fromISO("2020-05-25T09:08:34.123"),
        vehicle_type_id:2,
      },
      {
        photo_path: "busModule.png",
        registration_nb: "BUS-MAT" + Math.random().toString(36),
        release:DateTime.fromISO("2020-05-25T09:08:34.123"),
        vehicle_type_id:3,
      },
    ])
  }
}
