/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import GamesController from '#controllers/games_controller'
import TeamGamesController from '#controllers/team_games_controller'
import TeamsController from '#controllers/teams_controller'
import UserController from '#controllers/UserController'
import router from '@adonisjs/core/services/router'


router.resource('users', UserController)
router.resource('teams', TeamsController)
router.resource('games/solo', GamesController)
router.resource('games/team', TeamGamesController)