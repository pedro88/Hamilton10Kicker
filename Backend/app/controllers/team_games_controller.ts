import Team from '#models/team';
import TeamGame from '#models/team_game';
import TeamGame from '#models/team_game'
import type { HttpContext } from '@adonisjs/core/http'

export default class TeamGamesController {
  /**
   * Display a list of resource
   */
  async index({response}: HttpContext) {
    try{
      const TeamGames = TeamGame.all();
      if(TeamGames != null){
        return response.status(200).json({
          message: 'You got all the team games 😃.',
          data: TeamGames
        })
      }
    }catch(error){
      return response.status(500).json({
        message: 'An error has occure 😢.'
      })
    }
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    try{
      const TeamGameData = request.only(['team_id_1', 'team_id_2', 'winner_id', 'looser_id'])
      const TeamG = TeamGame.create(TeamGameData)

      return response.status(200).json({
        message: 'You created a new team 😃.',
        data: TeamG
      })
    }catch(error){
      return response.status(500).json({
        message: 'An error has occure 😢.'
      })
    }
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    try{
      const TeamG = await Team.findByOrFail(params.id)
      if(TeamG == null){
        return response.status(404).json({
          message: 'Team Game not found 😢.'
        })
      }
      return response.status(200).json({
          message: 'You got a team game 😃.',
          data: TeamG
      })
    }catch(error){
      return response.status(500).json({
        message: 'An error has occure 😢.'
      })
    }
  }

  /**
   * Edit individual record
   */
  async edit({ params, request, response }: HttpContext) {
    try{
      const Tg = await Team.findByOrFail(params.id)
      const TeamData = request.only(['team_id_1', 'team_id_2', 'winner_id', 'looser_id'])

      if(Tg == null){
        return response.status(404).json({
          message: 'Team game not found.'
        })
      }

      Tg.merge(TeamData)
    }
  }


  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}