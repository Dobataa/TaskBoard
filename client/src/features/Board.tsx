import { useEffect, useMemo, useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { TaskCard } from "./components";
import { getTasks } from "../services/taskService";
import { type Task, CardStatus } from "../models";

export default function Board() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchTasks = async () => {
      try {
        const response = await getTasks(controller.signal);

        setTasks(response.data);
        console.log(response.data);
      } catch (error: any) {
        if(error.name !== "AbortError"){
          console.log(error);
        }
      }
    };

    fetchTasks();
  }, []);

  const groupedTasks = useMemo(
    () => ({
      todo: tasks.filter((t) => t.status === CardStatus.Todo),
      inProgress: tasks.filter((t) => t.status === CardStatus.InProgress),
      done: tasks.filter((t) => t.status === CardStatus.Done),
    }),
    [tasks],
  );

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid size={4}>
        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: "#ECEFF1",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h6">TO DO</Typography>

          {groupedTasks.todo.map((el) => (
            <TaskCard
              key={el.id}
              title={el.title}
              status={el.status}
              description={el.description}
              priority={el.priority}
              createdAt={el.created_at}
            />
          ))}
        </Box>
      </Grid>

      <Grid size={4}>
        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: "#ECEFF1",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h6">IN PROGRESS</Typography>

          {groupedTasks.inProgress.map((el) => (
            <TaskCard
              key={el.id}
              title={el.title}
              status={el.status}
              description={el.description}
              priority={el.priority}
              createdAt={el.created_at}
            />
          ))}
        </Box>
      </Grid>

      <Grid size={4}>
        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: "#ECEFF1",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h6">DONE</Typography>

          {groupedTasks.done.map((el) => (
            <TaskCard
              key={el.id}
              title={el.title}
              status={el.status}
              description={el.description}
              priority={el.priority}
              createdAt={el.created_at}
            />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}
