import { createContext } from "react";
import type { Task } from "../models";

type TaskContextType = {
    tasks: Task[]
    isLoading: boolean
    fetchTasks: () => Promise<void>
}

export const TaskContext = createContext<TaskContextType | null>(null);