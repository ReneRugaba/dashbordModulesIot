import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class FuelConsumptions extends BaseSchema {
  protected tableName = 'fuel_consumptions'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table
      .integer('Current_year_id')
      .unsigned()
      .references('current_years.id')
      .onDelete('CASCADE') 
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
