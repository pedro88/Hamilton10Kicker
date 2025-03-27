/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import UserController from '#controllers/UserController'
import router from '@adonisjs/core/services/router'

router.resource('users', UserController)

