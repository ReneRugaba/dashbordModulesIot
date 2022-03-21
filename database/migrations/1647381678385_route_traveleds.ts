import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RouteTraveleds extends BaseSchema {
  protected tableName = 'route_traveleds'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.float('by_day')
      table.float('by_week')
      table.float('by_month')
      table.float('by_year')
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
