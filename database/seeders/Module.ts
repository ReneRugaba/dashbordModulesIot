import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Module from 'App/Models/Module'
import { DateTime } from 'luxon'

export default class ModuleSeeder extends BaseSeeder {
  public async run () {
    await Module.createMany([
      {
        matricule:"Mat-Mod"+Math.random().toString(36),
        desciption:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        photo_path:"moduleImage.jpeg",
        activate_status:true,
        createdAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        updatedAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        type_module_id:1,
        vehicle_id:1
      },
      {
        matricule:"Mat-Mod"+Math.random().toString(36),
        desciption:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        photo_path:"moduleImage.jpeg",
        activate_status:true,
        createdAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        updatedAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        type_module_id:2,
        vehicle_id:2
      },
      {
        matricule:"Mat-Mod"+Math.random().toString(36),
        desciption:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        photo_path:"moduleImage.jpeg",
        activate_status:true,
        createdAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        updatedAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        type_module_id:4,
        vehicle_id:3
      },
      {
        matricule:"Mat-Mod"+Math.random().toString(36),
        desciption:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        photo_path:"moduleImage.jpeg",
        activate_status:true,
        createdAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        updatedAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        type_module_id:3,
        vehicle_id:4
      },
      {
        matricule:"Mat-Mod"+Math.random().toString(36),
        desciption:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        photo_path:"moduleImage.jpeg",
        activate_status:true,
        createdAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        updatedAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        type_module_id:1,
        vehicle_id:4
      },
      {
        matricule:"Mat-Mod"+Math.random().toString(36),
        desciption:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        photo_path:"moduleImage.jpeg",
        activate_status:true,
        createdAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        updatedAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        type_module_id:2,
        vehicle_id:6
      },
      {
        matricule:"Mat-Mod"+Math.random().toString(36),
        desciption:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        photo_path:"moduleImage.jpeg",
        activate_status:true,
        createdAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        updatedAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        type_module_id:4,
        vehicle_id:7
      },
      {
        matricule:"Mat-Mod"+Math.random().toString(36),
        desciption:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        photo_path:"moduleImage.jpeg",
        activate_status:false,
        createdAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        updatedAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        type_module_id:2,
        vehicle_id:8
      },
      {
        matricule:"Mat-Mod"+Math.random().toString(36),
        desciption:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        photo_path:"moduleImage.jpeg",
        activate_status:true,
        createdAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        updatedAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        type_module_id:1,
        vehicle_id:9
      },
      {
        matricule:"Mat-Mod"+Math.random().toString(36),
        desciption:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        photo_path:"moduleImage.jpeg",
        activate_status:false,
        createdAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        updatedAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        type_module_id:2,
        vehicle_id:1
      },
      {
        matricule:"Mat-Mod"+Math.random().toString(36),
        desciption:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        photo_path:"moduleImage.jpeg",
        activate_status:false,
        createdAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        updatedAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        type_module_id:4,
        vehicle_id:2
      },
      {
        matricule:"Mat-Mod"+Math.random().toString(36),
        desciption:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        photo_path:"moduleImage.jpeg",
        activate_status:true,
        createdAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        updatedAt:DateTime.fromISO("2020-05-25T09:08:34.123"),
        type_module_id:4,
        vehicle_id:3
      },
    ])
  }
}
