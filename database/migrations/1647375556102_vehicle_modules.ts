import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class VehicleModules extends BaseSchema {
  protected tableName = 'vehicle_modules'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('module_id').unsigned().references('modules.id')
      table.integer('vehicle_id').unsigned().references('vehicles.id')
      table.unique(['module_id', 'vehicle_id'])
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
