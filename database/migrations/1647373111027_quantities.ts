import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Quantities extends BaseSchema {
  protected tableName = 'quantities'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('in_use')
      table.integer('available')
      table.integer('total')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
