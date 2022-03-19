import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class LogsModules extends BaseSchema {
  protected tableName = 'logs_modules'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('datamesurement_by_day')
      table.integer('datamesurement_by_week')
      table.integer('datamesurement_by_month')
      table.integer('datamesurement_by_year')
      table.integer('module_id')
          .unsigned()
          .references('modules.id')
          .onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
