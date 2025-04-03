import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class TeamGame extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({})
  declare team_id_1: number

  @column({})
  declare team_id_2: number

  @column({})
  declare winner_id: number | null

  @column({})
  declare looser_id: number | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}