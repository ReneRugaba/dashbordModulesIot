import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Modules extends BaseSchema {
  protected tableName = 'modules'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('vehicle_id')
        .unsigned()
        .references('vehicles.id')
        .onDelete('CASCADE')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
