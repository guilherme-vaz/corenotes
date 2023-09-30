import BaseSchema from '@ioc:Adonis/Lucid/Schema'

// type color = 'white' | 'blue' | 'green' | 'yellow' | 'red' | 'cyan' | 'purple' | 'gray' | 'black' | 'brown'


export default class Notes extends BaseSchema {
  protected tableName = 'notes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').notNullable()
      table.text('content', 'longtext').notNullable()
      table.boolean('favorite').defaultTo(false)
      table.string('color').defaultTo("white")
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
