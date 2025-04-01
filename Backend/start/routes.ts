/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import TeamsController from '#controllers/teams_controller'
import UserController from '#controllers/UserController'
import router from '@adonisjs/core/services/router'

router.resource('users', UserController)
router.resource('teams', TeamsController)
