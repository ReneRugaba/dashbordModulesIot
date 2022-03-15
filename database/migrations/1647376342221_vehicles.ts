import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Vehicles extends BaseSchema {
  protected tableName = 'vehicles'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('vehicle_type_id')
            .unsigned()
            .references('vehicle_types.id')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
