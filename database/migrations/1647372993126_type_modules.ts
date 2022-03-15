import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TypeModules extends BaseSchema {
  protected tableName = 'type_modules'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('type_name')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
