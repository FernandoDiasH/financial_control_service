import { PrismaCategoryRepository } from "../../../infra/database/prisma/repositories/PrismaCategoryRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoryRepository = new PrismaCategoryRepository()
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository)
const createCategoryController = new CreateCategoryController(createCategoryUseCase)

export { createCategoryController }