import type { HttpContext } from '@adonisjs/core/http'
import User from '../models/user.js'

export default class UsersController {

  hello(){
    return 'hello world'
  }

  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return User.all();
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

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
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}