import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Team extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ serializeAs: null})
  declare team_name: string

  @column({ serializeAs: null })
  declare player1_id: number

  @column({ serializeAs: null })
  declare player2_id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}