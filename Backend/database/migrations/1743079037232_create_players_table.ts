import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'players'

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
      
      table.integer('player_id1').unsigned().nullable().references('id').inTable('teams')
      table.integer('player_id2').unsigned().nullable().references('id').inTable('teams')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}