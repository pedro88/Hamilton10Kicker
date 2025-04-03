import Team from '#models/team';
import TeamGame from '#models/team_game';
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
        message: error.message
      })
    }
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    try{
      const TeamGameData = request.only(['team_id_1', 'team_id_2', 'winner_id', 'looser_id', 'team_1_score', 'team_2_score'])
      TeamGame.create(TeamGameData)

      return response.status(200).json({
        message: 'You created a new team 😃.'      
      })
    }catch(error){
      return response.status(500).json({
        message: error.message
      })
    }
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    try{
      const teamId = params.id;
      const team = await Team.find(teamId);
      if(team == null){
        return response.status(404).json({
          message: 'Team Game not found 😢.'
        })
      }
      return response.status(200).json({
          message: 'You got a team game 😃.',
          data: team
      })
    }catch(error){
      return response.status(500).json({
        message: error.message
      })
    }
  }

  /**
   * Edit individual record
   */
  async update({ params, request, response }: HttpContext) {
    try{
      const Tg = await TeamGame.findByOrFail("id", params.id)
      const TeamData = request.only(['team_id_1', 'team_id_2', 'winner_id', 'looser_id', 'team_1_score', 'team_2_score'])

      if(Tg == null){
        return response.status(404).json({
          message: 'Team game not found.'
        })
      }

      Tg.merge(TeamData)
      await Tg.save()
      return response.status(200).json({
        message: 'You modified the Team_Game 😃.',
        data: Tg
      })
    }catch(error){
      return response.status(500).json({
        message: error.message
      })
    }
  }


  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    try{
      const TeamG = await TeamGame.find(params.id)
      if(TeamG == null){
        return response.status(404).json({
          message: 'Team game not found 😢'
        })
      }
      await TeamG.delete()
      return response.status(200).json({
        message: `You deleted the team game ${params.id} 😃.`
      })
    }catch(error){
      return response.status(500).json({
        message: 'An error has occure 😢.'
      })
    }
  }
}