import express from 'express'
import { CategoryController } from '../controller/CategoryController'

export const categoryRouter = express.Router()

const categoryController = new CategoryController()
categoryRouter.get("/", () => { })
categoryRouter.post("/", categoryController.createCategory)