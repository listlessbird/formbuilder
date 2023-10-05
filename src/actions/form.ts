"use server"

import prisma from "@/lib/prisma"
import { GetFormStats } from "@/types"
import { currentUser } from "@clerk/nextjs"

class UserNotFoundErr extends Error {

}




export async function GetFormStats(): Promise<GetFormStats | typeof UserNotFoundErr> {

    const user = await currentUser()

    if (!user) throw new UserNotFoundErr()

    const stats = await prisma.form.aggregate({
        where: {
            userId: user.id
        },
        _sum: {
            visits: true,
            submissions: true
        }
    })

    const submissions = stats._sum.submissions || 0
    const visits = stats._sum.visits || 0

    let submissionRate = 0

    if (visits > 0) submissionRate = (submissions / visits) * 100

    const bounceRate = 100 - submissionRate

    return {
        bounceRate,
        submissionRate,
        submissions,
        visits
    }
}