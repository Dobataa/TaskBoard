import express from "express";
import { supabase } from "../supabaseClient.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { data, error } = await supabase.from("tasks").select("*");

  res.json({ data, error });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("id", id)
    .single();

  res.json({ data, error });
});

router.post("/", async (req, res) => {
  const { title, description, status, priority } = req.body;

  const { error } = await supabase.from("tasks").insert([
    {
      title,
      description,
      status,
      priority,
      created_at: new Date().toISOString(),
    },
  ]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(201).send();
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, status, priority } = req.body;

  const { error } = await supabase
    .from("tasks")
    .update([
      {
        title,
        description,
        status,
        priority,
      },
    ])
    .eq("id", id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(204).send();
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase.from("tasks").delete().eq("id", id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(204).send();
});

export default router;
