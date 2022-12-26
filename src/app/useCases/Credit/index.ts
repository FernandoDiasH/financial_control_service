import { PrismaCreditConfigRepository } from "../../../infra/database/prisma/repositories/PrismaCreditConfigRepository";
import { PrismaCreditRepository } from "../../../infra/database/prisma/repositories/PrismaCreditRepository";
import { CreateCredit } from "./CreateCredit";



const creditRepository = new PrismaCreditRepository()
const creditConfigRepository = new PrismaCreditConfigRepository()
const createCredit = new CreateCredit(creditConfigRepository, creditRepository)