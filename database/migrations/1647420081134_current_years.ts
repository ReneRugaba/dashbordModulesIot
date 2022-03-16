import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CurrentYears extends BaseSchema {
  protected tableName = 'current_years'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('year')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
