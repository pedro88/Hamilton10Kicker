import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'teams'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('team_name')

      table.integer('player_1_id').unsigned().notNullable().references('id').inTable('users')
      table.integer('player_2_id').unsigned().notNullable().references('id').inTable('users')
      
      table.integer('game_won').defaultTo(0)
      table.integer('game_lost').defaultTo(0)

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}