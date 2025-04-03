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
   * Handle form submission for the create action
   */
  async store({ response, request }: HttpContext) {
      try {
          const TeamData = request.only(['team_name', 'player_1_id', 'player_2_id', 'game_won', 'game_lost'])
    
          const team = await Team.create(TeamData)
    
          return response.status(201).json({
            message: 'Team created successfully 😃.',
            data: team
          })
        } catch (error) {
          return response.status(500).json({
            message: 'An error occurred while creating the player 😢.',
            error: error.message
          })
      }
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    console.log('id recu', params.id)
    try {
          const team = await Team.findByOrFail("id", params.id);
      
          if (!team) {
            return response.status(404).json({
              message: 'Team not found'
            });
          }
      
          return response.status(200).json({
            message: 'Team details retrieved successfully 😃.',
            data: team
          });
        } catch (error) {  
          return response.status(500).json({
            message: 'An error has occurre while retrieving the team 😢.',
            error: error.message
          });
        }
  }

  async update({ params, request, response }: HttpContext){
    try{
      const team = await Team.findByOrFail('id', params.id)
      const teamData = request.only(['team_name', 'player_1_id', 'player_2_id', 'game_won', 'game_lost'])

      team.merge(teamData)
      team.save()

      return response.status(200).json({
        message: `You updated the team ${params.id} 😃.`,
        data: team
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
        const team = await Team.find(params.id)
        if(team == null){
          return response.status(404).json({
            message: 'Team not found.'
          })
        }
        await team.delete()
        return response.status(200).json({
          message: `You delete the team ${params.id} 😃.`
      })

    }catch(error){
      return response.status(500).json({
        message: error.message
      })
    }
  }
}