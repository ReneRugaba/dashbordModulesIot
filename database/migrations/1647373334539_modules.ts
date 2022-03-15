import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Modules extends BaseSchema {
  protected tableName = 'modules'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('type_module_id')
            .unsigned()
            .references('type_modules.id')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
