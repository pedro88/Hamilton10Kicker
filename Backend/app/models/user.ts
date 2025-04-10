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
  declare username: string | null

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column({ serializeAs: null })
  declare country: string

  @column({ serializeAs: null })
  declare victoires: number

  @column({ serializeAs: null })
  declare defaites: number

  @column({ serializeAs: null })
  declare victoires_Team: number

  @column({ serializeAs: null })
  declare defaites_Team: number

  @column({ serializeAs: null })
  declare level: number

  @column({ serializeAs: null })
  declare xp: number

  @column({ serializeAs: null })
  declare victoiresEnEquipe: number

  @column({ serializeAs: null })
  declare defaitesEnEquipe: number

}