import { Request, Response } from "express";
import * as taskService from "../services/taskService.js";

export const getTasks = async (req: Request, res: Response) => {
  try {
    const data = await taskService.getTasks();

    res.json({ data });
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};

export const getTaskById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const data = await taskService.getTaskById(id);

    res.json({ data });
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};

export const createTask = async (req: Request, res: Response) => {
  const { title, description, status, priority } = req.body;

  try {
    await taskService.createTask(title, description, status, priority);

    res.status(201).send();
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { title, description, status, priority } = req.body;

  try {
    await taskService.updateTask(id, title, description, status, priority);

    res.status(204).send();
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    await taskService.deleteTask(id);
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
