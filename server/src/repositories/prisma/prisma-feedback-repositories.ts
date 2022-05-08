import { prisma } from "../../prisma";
import { FeedbackRepository, FeedbackCreateData } from "../feedback-repositories";

export class PrismaFeedbackRepository implements FeedbackRepository {
    async create({type, comment, screenshot}: FeedbackCreateData){
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot
            }
        });    
    }
}