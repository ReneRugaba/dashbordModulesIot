/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/


import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
}).as('home')

Route.get('/file/:file', async({response,params})=>{// where :file is file name
  return response.download(`./uploads/${params.file}`)
})

Route.get('/modules','DashModulesController.getAllModules')
Route.get('/modules/:id','DashModulesController.getmoduleinformations')
Route.post('/modules','DashModulesController.createModule')
Route.put('/modules','DashModulesController.updateStatusModule')

Route.get('*',({response})=>{
  response.redirect('/')
})