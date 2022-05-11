import { Request, Response } from "express";
import { prisma } from "../utils/prisma";

export const getAllProfiles = async (req: Request, res: Response) => {
	const profiles = await prisma.test.findMany()
	res.send(profiles)
}

export const createProfile = async (req: Request, res: Response) => {
	const { name } = req.body
	const profile = await prisma.test.create({
		data: {
			name
		}
	})
	res.send(profile)
}


