import type { HttpContext } from '@adonisjs/core/http'
import Game from '../models/game.js'

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
      const GameData = request.only(['player_id_1', 'player_id_2', 'winner_id', 'looser_id', 'player_1_score', 'player_2_score'])

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

  async update({ params, request, response }: HttpContext) {
      try{
        const game = await Game.findOrFail(params.id)
  
        const GameData = request.only(['player_id_1', 'player_id_2', 'winner_id', 'looser_id', 'player_1_score', 'player_2_score'])
  
        game.merge(GameData)
  
        game.save()
  
        return response.status(200).json({
          data: game,
          message: "The user has been update 😃 ." 
        })
      }catch(error){
        return response.status(500).json({
          message: "An error has occurs 😢."
        })
      }
    }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    try{
      const game = await Game.findOrFail(params.id);
      await game.delete();

      return response.status(201).json({
        message: 'You deleted the game 😃.'

      })
    }catch(error){
      return response.status(500).json({
        message: 'An error has occure 😢.'
      })
    }
  }
}