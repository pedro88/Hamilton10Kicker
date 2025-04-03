import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'games'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.integer('player_id_1').unsigned().notNullable().references('id').inTable('users')
      table.integer('player_id_2').unsigned().notNullable().references('id').inTable('users')
      table.integer('winner_id').unsigned().notNullable().references('id').inTable('users')
      table.integer('looser_id').unsigned().notNullable().references('id').inTable('users')
      table.integer('player_1_score').unsigned().notNullable()
      table.integer('player_2_score').unsigned().notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}