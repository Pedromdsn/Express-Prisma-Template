import { Router } from "express"
import { createProfile, getAllProfiles } from "./api/profiles"

const router = Router()

router.get("/profiles", getAllProfiles)
router.post("/profiles", createProfile)

export { router }
