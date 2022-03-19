import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ErrorsListed from 'App/Models/ErrorsListed'
import { DateTime } from 'luxon'

export default class ErrorsListedSeeder extends BaseSeeder {
  public async run () {
    await ErrorsListed.createMany([
      {
        causeerror:"malfunction",
        createdAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        planned_startup:DateTime.fromISO("2020-06-25T09:08:34.123"),
        startup:DateTime.fromISO("2020-06-25T09:08:34.123"),
        modules_id:12
      },
      {
        causeerror:"loose connection",
        createdAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        planned_startup:DateTime.fromISO("2020-06-25T09:08:34.123"),
        startup:DateTime.fromISO("2020-06-25T09:08:34.123"),
        modules_id:12
      },
      {
        causeerror:"malfunction",
        createdAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        planned_startup:DateTime.fromISO("2020-06-25T09:08:34.123"),
        startup:DateTime.fromISO("2020-06-25T09:08:34.123"),
        modules_id:12
      },{
        causeerror:"malfunction",
        createdAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        planned_startup:DateTime.fromISO("2020-06-25T09:08:34.123"),
        startup:DateTime.fromISO("2020-06-25T09:08:34.123"),
        modules_id:12
      },
      {
        causeerror:"malfunction",
        createdAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        planned_startup:DateTime.fromISO("2020-06-25T09:08:34.123"),
        startup:DateTime.fromISO("2020-06-25T09:08:34.123"),
        modules_id:11
      },
      {
        causeerror:"loose connection",
        createdAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        planned_startup:DateTime.fromISO("2020-06-25T09:08:34.123"),
        startup:DateTime.fromISO("2020-06-25T09:08:34.123"),
        modules_id:11
      },
      {
        causeerror:"malfunction",
        createdAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        planned_startup:DateTime.fromISO("2020-06-25T09:08:34.123"),
        startup:DateTime.fromISO("2020-06-25T09:08:34.123"),
        modules_id:11
      },{
        causeerror:"malfunction",
        createdAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        planned_startup:DateTime.fromISO("2020-06-25T09:08:34.123"),
        startup:DateTime.fromISO("2020-06-25T09:08:34.123"),
        modules_id:11
      },
      {
        causeerror:"malfunction",
        createdAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        planned_startup:DateTime.fromISO("2020-06-25T09:08:34.123"),
        startup:DateTime.fromISO("2020-06-25T09:08:34.123"),
        modules_id:10
      },
      {
        causeerror:"loose connection",
        createdAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        planned_startup:DateTime.fromISO("2020-06-25T09:08:34.123"),
        startup:DateTime.fromISO("2020-06-25T09:08:34.123"),
        modules_id:10
      },
      {
        causeerror:"malfunction",
        createdAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        planned_startup:DateTime.fromISO("2020-06-25T09:08:34.123"),
        startup:DateTime.fromISO("2020-06-25T09:08:34.123"),
        modules_id:10
      },{
        causeerror:"malfunction",
        createdAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        planned_startup:DateTime.fromISO("2020-06-25T09:08:34.123"),
        startup:DateTime.fromISO("2020-06-25T09:08:34.123"),
        modules_id:10
      }
    ])
  }
}
