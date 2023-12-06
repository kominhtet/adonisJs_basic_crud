'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('welcome')
/* Route.get('/', ({view}) =>{
    return view.render('welcome')
}) 
*/
Route.get('/', 'PageController.index');

Route.get('/user', 'UserController.index');
Route.get('/user/create', 'UserController.create');
Route.post('/user/store', 'UserController.store');
Route.get('/user/:id/edit', 'UserController.edit');
Route.post('/user/:id/update', 'UserController.update');
Route.get('/user/:id/destroy', 'UserController.destroy');

