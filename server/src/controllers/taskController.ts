import { Request, Response } from "express";
import * as taskService from "../services/taskService.js";
import * as taskValidator from "../validators/taskValidator.js";
import { Task } from "../types/Task.js";

export const getTasks = async (req: Request, res: Response) => {
  try {
    const data = await taskService.getTasks();

    res.status(200).json({ success: true, data });
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

    res.status(200).json({ success: true, data });
  } catch (error: any) {
    res.status(404).json({ success: false, error: error.message });
  }
};

export const getTasksByStatusId = async (req: Request, res: Response) => {
  try {
    const statusId = Number(req.params.statusId);

    const data = await taskService.getTaskByStatusId(statusId);

    res.status(200).json({ success: true, data });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const createTask = async (req: Request<{}, {}, Task>, res: Response) => {
  const errors = taskValidator.validateTask(req.body);

  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  try {
    const data = await taskService.createTask(req.body);

    res.status(201).json({ success: true, data });
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
    const data = await taskService.updateTask(id, req.body);

    res.status(200).json({ success: true, data });
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
    res.status(200).json({ success: true });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};
