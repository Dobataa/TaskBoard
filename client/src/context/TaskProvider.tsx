import { useCallback, useEffect, useState, type ReactNode } from "react";
import type { Task } from "../models";
import { getTasks } from "../services/taskService";
import { TaskContext } from "./TaskContext";

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const controller = new AbortController();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchTasks = useCallback(async () => {
    setIsLoading(true);
    try {
        const res = await getTasks(controller.signal);
        setTasks(res.data);
    } catch (error: any) {
        console.log(error);
    }finally{
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <TaskContext.Provider value={{ tasks, isLoading, fetchTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
