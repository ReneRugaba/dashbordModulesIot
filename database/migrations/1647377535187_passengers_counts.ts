import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PassengersCounts extends BaseSchema {
  protected tableName = 'passengers_counts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('nb_passengers_by_day')
      table.integer('nb_passengers_by_week')
      table.integer('nb_passengers_by_month')
      table.integer('nb_passengers_by_year')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
