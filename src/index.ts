import express from "express"

import cors from "cors"
import morgan from "morgan"

import { router } from "./router"

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan("short"))

app.use("/api", router)

app.listen(3333, () => console.log("Server started on port 3333"))

export { app }
