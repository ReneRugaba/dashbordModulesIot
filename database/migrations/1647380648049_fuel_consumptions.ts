import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class FuelConsumptions extends BaseSchema {
  protected tableName = 'fuel_consumptions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('by_day')
      table.integer('by_week')
      table.integer('by_month')
      table.integer('by_year')
      table.integer('module_id')
        .unsigned()
        .references('modules.id')
        .onDelete('Cascade')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
