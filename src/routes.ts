import { Router } from 'express'
import { StarredController } from './controllers/starred'

const routes = Router()

const starredController = new StarredController()

routes.get('/starred-repositories/:id/:filter', starredController.find)
routes.get('/starred-repositories/:id', starredController.find)

routes.get('/starred-repositories', starredController.findAll)

routes.post('/starred-repositories', starredController.create)

routes.put('/starred-repositories', starredController.update)

routes.delete('/starred-repositories/:id', starredController.remove)

export default routes
