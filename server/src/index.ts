import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import taskRoutes from "./routes/tasks.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("TaskBoard API running")
})

app.use("/tasks", taskRoutes)

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running")
})