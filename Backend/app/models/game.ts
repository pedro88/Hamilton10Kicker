import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Game extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({})
  declare player_id_1: number | null;

  @column({})
  declare player_id_2: number | null;

  @column({})
  declare winner_id: number | null

  @column({})
  declare looser_id: number | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}