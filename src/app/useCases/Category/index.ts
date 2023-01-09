import { PrismaCategoryRepository } from '../../../infra/database/prisma/repositories/PrismaCategoryRepository';
import { CreateCategory } from './CreateCategory';

const categoryRepository = new PrismaCategoryRepository();
const createCategoryUseCase = new CreateCategory(categoryRepository);

export { createCategoryUseCase };
