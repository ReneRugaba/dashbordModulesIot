import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class VehicleTypes extends BaseSchema {
  protected tableName = 'vehicle_types'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('vehicle_type')
      table.integer('passenger_max')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
