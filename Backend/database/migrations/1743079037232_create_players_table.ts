import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('username').notNullable()
      table.string('password').notNullable()
      table.string('email').notNullable()
      table.string('country').notNullable()
      table.integer('victoires').notNullable().defaultTo(0)
      table.integer('defaites').notNullable().defaultTo(0)
      table.integer('level').notNullable().defaultTo(0)
      table.integer('xp').notNullable().defaultTo(0)
      table.integer('victoiresEnEquipes').notNullable().defaultTo(0)
      table.integer('defaitesEnEquipes').notNullable().defaultTo(0)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}