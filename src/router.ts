import { Router } from "express"
import { createProfile, deleteProfile, getAllProfiles } from "./api/profiles"

const router = Router()

router.get("/profiles", getAllProfiles)
router.post("/profiles", createProfile)
router.delete("/profiles/:id", deleteProfile)

export { router }
