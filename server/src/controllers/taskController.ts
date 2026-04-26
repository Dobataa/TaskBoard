import { Request, Response } from "express";
import * as taskService from "../services/taskService.js";
import * as taskValidator from "../validators/taskValidator.js";
import { Task } from "../types/Task.js";

export const getTasks = async (req: Request, res: Response) => {
  try {
    const data = await taskService.getTasks();

    res.json({ success: true, data });
  } catch (error: any) {
    res.status(404).json({ success: false, error: error.message });
  }
};

export const getTaskById = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  try {
    const id = Number(req.params.id);

    const errors = taskValidator.validateTaskId(id);

    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    const data = await taskService.getTaskById(id);

    res.json({ success: true, data });
  } catch (error: any) {
    res.status(404).json({ success: false, error: error.message });
  }
};

export const createTask = async (req: Request<{}, {}, Task>, res: Response) => {
  const errors = taskValidator.validateTask(req.body);

  if (errors.length > 0) {
    return res.status(400).json({ success: true, errors });
  }

  try {
    await taskService.createTask(req.body);

    res.status(201).send({ success: true });
  } catch (error: any) {
    res.status(404).json({ success: false, error: error.message });
  }
};

export const updateTask = async (
  req: Request<{ id: string }, {}, Task>,
  res: Response,
) => {
  const id = Number(req.params.id);

  const errors = taskValidator.validateTask(req.body);

  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  try {
    await taskService.updateTask(id, req.body);

    res.status(204).send({ success: true });
  } catch (error: any) {
    res.status(404).json({ success: false, error: error.message });
  }
};

export const deleteTask = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  const id = Number(req.params.id);

  const errors = taskValidator.validateTaskId(id);

  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  try {
    await taskService.deleteTask(id);
    res.status(204).send({ success: true });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};
