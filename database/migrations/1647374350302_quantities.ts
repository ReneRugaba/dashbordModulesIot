import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Quantities extends BaseSchema {
  protected tableName = 'quantities'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('type_module_id')
            .unsigned()
            .references('type_modules.id')
            .onDelete('CASCADE')
     
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
