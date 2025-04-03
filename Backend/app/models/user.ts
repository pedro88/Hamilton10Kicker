import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare username: string

  @column()
  declare email: string

  @column()
  declare password: string

  @column()
  declare country: string | null

  @column()
  declare victoires: number

  @column()
  declare defaites: number

  @column()
  declare victoires_Team: number

  @column()
  declare defaites_Team: number

  @column()
  declare level: number

  @column()
  declare xp: number

  @column()
  declare victoiresEnEquipe: number

  @column()
  declare defaitesEnEquipe: number

}