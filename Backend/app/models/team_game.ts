import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class TeamGame extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ serializeAs: null })
  declare team_id_1: number

  @column({ serializeAs: null })
  declare team_id_2: number

  @column({ serializeAs: null })
  declare winner_id: number

  @column({ serializeAs: null })
  declare looser_id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}