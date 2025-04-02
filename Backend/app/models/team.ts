import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { serialize } from 'v8'

export default class Team extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ serializeAs: null})
  declare team_name: string

  @column({ serializeAs: null })
  declare player_1_id: number

  @column({ serializeAs: null })
  declare player_2_id: number

  @column({ serializeAs: null})
  declare game_won: number

  @column({ serializeAs: null })
  declare game_lost: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}