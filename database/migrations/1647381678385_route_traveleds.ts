import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RouteTraveleds extends BaseSchema {
  protected tableName = 'route_traveleds'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.float('km_by_day')
      table.float('km_by_week')
      table.float('km_by_month')
      table.float('km_by_year')
      table
      .integer('vehicle_id')
      .unsigned()
      .references('vehicles.id')
      .onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
