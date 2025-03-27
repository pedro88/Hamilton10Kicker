/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import PlayerController from '#controllers/PlayerController'
import router from '@adonisjs/core/services/router'

router.resource('Player', PlayerController)

