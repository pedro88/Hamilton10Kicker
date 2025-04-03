import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { serialize } from 'v8'

export default class Team extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare team_name: string

  @column()
  declare player_1_id: number

  @column()
  declare player_2_id: number

  @column()
  declare game_won: number | null

  @column()
  declare game_lost: number | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}