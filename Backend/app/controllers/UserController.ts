import type { HttpContext } from '@adonisjs/core/http'
import User from '../models/user.js'


export default class UserController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {

    try{
      const Users = await User.all();

      return response.status(200).json({
        message: 'You got all the users 😃 .',
        data: Users
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
  async store({ request, response }: HttpContext) {
    try {
      const UserData = request.only(['username', 'password', 'country', 'email'])

      const user = await User.create(UserData)

      return response.status(201).json({
        message: 'Player created successfully 😃.',
        data: user
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
    try {
      const userId = params.id;
      const user = await User.find(userId);
  
      if (!user) {
        return response.status(404).json({
          message: 'User not found'
        });
      }
  
      return response.status(200).json({
        message: 'User details retrieved successfully 😃.',
        data: user
      });
    } catch (error) {  
      return response.status(500).json({
        message: 'An error occurred while retrieving the user 😢.',
        error: error.message
      });
    }
  }

 
  async update({ params, request, response }: HttpContext) {
    try{
      const user = await User.findOrFail(params.id)

      const UserData = request.only(['username', 'password', 'conutry', 'email'])

      user.merge(UserData)

      user.save()

      return response.status(200).json({
        data: user,
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
      const user = await User.findOrFail(params.id);
      await user.delete()
      
      return response.status(200).json({
        message : 'User destroyed 😃.'
      })
    }catch(error){
      return response.status(500).json({
        message : "An error has occure in detroying the user 😢."
      })
    }
  }
}