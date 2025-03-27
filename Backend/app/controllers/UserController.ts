import type { HttpContext } from '@adonisjs/core/http'
import User from '../models/user.js'


export default class UserController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {

    return 'Vous avez tous les players 😃 .'
  }

  /**
   * Display form to create a new record
   */
  public async create({ }: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    try {
      const UserData = request.only(['username', 'password', 'country','victoires', 'defaites', 'level', 'xp', 'email'])

      const user = await User.create(UserData)

      return response.status(201).json({
        message: 'Player created successfully',
        data: user
      })
    } catch (error) {
      return response.status(500).json({
        message: 'An error occurred while creating the player',
        error: error.message
      })
    }
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({}: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}