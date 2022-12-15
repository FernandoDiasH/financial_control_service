import { Router } from "express";
import { CategoryController } from "./infra/http/controllers/CategoryController";
import CreditConfigController from "./infra/http/controllers/CreditConfigController";


const routes = Router()

routes.get('/', (req, res)=>{
    return res.send('Hello word')
})

routes.post('/category', CategoryController.create)
routes.post('/credit/config', CreditConfigController.create)

export {routes}