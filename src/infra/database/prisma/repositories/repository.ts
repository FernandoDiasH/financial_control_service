import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";

@Injectable()
export class Repository {
    constructor(
        protected prisma: PrismaService
    ) { }
}