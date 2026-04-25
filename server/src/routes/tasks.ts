import express from "express"
import { supabase } from "../supabaseClient.js"

const router = express.Router()

router.get("/", async (req, res) => {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")

  res.json({ data, error })
})


export default router