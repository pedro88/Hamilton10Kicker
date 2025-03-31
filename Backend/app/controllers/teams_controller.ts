import type { HttpContext } from '@adonisjs/core/http'
import Team from '../models/team.js'

export default class TeamsController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    try{
          const Teams = await Team.all();
    
          return response.status(200).json({
            message: 'You got all the teams 😃 .',
            data: Teams
          })
        }catch(error){
          return response.status(500).json({
            mesagge: 'A error has occur 😢 .',
            error: error.message
          })
      }
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ response, request }: HttpContext) {
      try {
          const TeamData = request.only(['team_name', 'player1_id', 'player2_id'])
    
          const team = await Team.create(TeamData)
    
          return response.status(201).json({
            message: 'Team created successfully',
            data: team
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
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}