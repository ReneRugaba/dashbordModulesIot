import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import CurrentYear from 'App/Models/CurrentYear'

export default class CurrentYearSeeder extends BaseSeeder {
  public async run () {
    await CurrentYear.createMany([
      {
        year:2016
      },
      {
        year:2017
      },
      {
        year:2018
      },
      {
        year:2019
      },
      {
        year:2020
      },
      {
        year:2021
      },
      {
        year:2022
      },
    ])
  }
}
