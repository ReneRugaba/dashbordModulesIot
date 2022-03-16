import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PassengersCounts extends BaseSchema {
  protected tableName = 'passengers_counts'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table
      .integer('current_year_id')
      .unsigned()
      .references('current_years.id')
      .onDelete('CASCADE') 
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
