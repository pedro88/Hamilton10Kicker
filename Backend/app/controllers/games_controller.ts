import type { HttpContext } from '@adonisjs/core/http'
import Game from '../models/game.js'
import { request } from 'http'

export default class GamesController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
     try{
      const Games = Game.all()
      return response.status(200).json({
        message: "You got all the games",
        data: Games
      })
     }catch(error){
      return response.status(400).json({
        message: 'An error has occure.'
      })
     }
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    try {
      const GameData = request.only(['player_id_1', 'player_id_2'])

      const game = await Game.create(GameData)

      return response.status(201).json({
        message: 'Game created successfully 😃.',
        data: game
      })
    } catch (error) {
      return response.status(500).json({
        message: 'An error occurred while creating the game 😢.',
        error: error.message
      })
    }
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    try{
      const game = await Game.find(params.id);
      return response.status(201).json({
        message: 'You got the game 😃.',
        data: game
      })
    }catch(error){
      return response.status(404).json({
        message: 'An error has occure when catching the game 😢.'
      })
    }
  }

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