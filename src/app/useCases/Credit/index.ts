import { PrismaCreditConfigRepository } from "../../../infra/database/prisma/repositories/PrismaCreditConfigRepository";
import { PrismaCreditRepository } from "../../../infra/database/prisma/repositories/PrismaCreditRepository";
import { CreateCredit } from "./CreateCredit";
import { FindCredits } from "./findCredits";
import { FindDistincstMonts } from "./findDistinctsMouth";



const creditRepository = new PrismaCreditRepository()
const creditConfigRepository = new PrismaCreditConfigRepository()
const createCredit = new CreateCredit(creditConfigRepository, creditRepository)
const findcredits = new FindCredits(creditRepository)
const findDistinctMounts = new FindDistincstMonts(creditRepository)

export {createCredit, findcredits, findDistinctMounts}