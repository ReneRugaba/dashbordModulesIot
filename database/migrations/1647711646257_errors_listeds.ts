import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ErrorsListeds extends BaseSchema {
  protected tableName = 'errors_listeds'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('causeerror')
      table.timestamp('planned_startup', { useTz: true })
      table.timestamp('startup', { useTz: true })
      table.timestamp('created_at', { useTz: true })
      table.integer('modules_id')
            .unsigned()
            .references('modules.id')
            .onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
