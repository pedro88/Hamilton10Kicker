import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('username').notNullable()
      table.string('password').notNullable()
      table.string('salt').notNullable()
      table.string('email').notNullable()
      table.string('country').notNullable()
      table.integer('victoires').notNullable()
      table.integer('defaites').notNullable()
      table.integer('level').notNullable()
      table.integer('xp').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}