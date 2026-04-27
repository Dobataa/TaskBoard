import { useMemo } from "react";
import { Grid} from "@mui/material";
import { TaskColumn } from "./components";
import { CardStatus } from "../models";
import { useTasks } from "../context/useTasks";

export default function Board() {
  const { tasks, isLoading } = useTasks();

  const groupedTasks = useMemo(
    () => ({
      todo: tasks.filter((t) => t.status === CardStatus.Todo),
      inProgress: tasks.filter((t) => t.status === CardStatus.InProgress),
      done: tasks.filter((t) => t.status === CardStatus.Done),
    }),
    [tasks],
  );

  const counts = useMemo(() => {
    return tasks.reduce(
      (acc, task) => {
        if (task.status === CardStatus.Todo) acc.todo++;
        if (task.status === CardStatus.InProgress) acc.inProgress++;
        if (task.status === CardStatus.Done) acc.done++;
        return acc;
      },
      { todo: 0, inProgress: 0, done: 0 },
    );
  }, [tasks]);

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid size={{ xs: 12, md: 4}}>
        <TaskColumn
          header={"TO DO"}
          count={counts.todo}
          isLoading={isLoading}
          tasks={groupedTasks.todo}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4}}>
        <TaskColumn
          header={"IN PROGRESS"}
          count={counts.inProgress}
          isLoading={isLoading}
          tasks={groupedTasks.inProgress}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4}}>
        <TaskColumn
          header={"DONE"}
          count={counts.done}
          isLoading={isLoading}
          tasks={groupedTasks.done}
        />
      </Grid>
    </Grid>
  );
}
