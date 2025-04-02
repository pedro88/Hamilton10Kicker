import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'team_games'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('team_id_1').unsigned().notNullable().references('id').inTable('teams')
      table.integer('team_id_2').unsigned().notNullable().references('id').inTable('teams')

      table.integer('winner_id').unsigned().notNullable().references('id').inTable('users')
      table.integer('looser_id').unsigned().notNullable().references('id').inTable('users')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}