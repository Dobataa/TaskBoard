import { useMemo } from "react";
import { Grid, Box, Typography, Skeleton } from "@mui/material";
import { TaskCard } from "./components";
import { CardStatus } from "../models";
import { useTasks } from "../context/useTasks";

export default function Board() {
  const { tasks, isLoading } = useTasks();
  console.log(isLoading);

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

          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <Skeleton
                  key={i}
                  variant="rectangular"
                  height={180}
                  sx={{ borderRadius: 2 }}
                />
              ))
            : groupedTasks.todo.map((el) => (
                <TaskCard
                  key={el.id}
                  id={el.id}
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

          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <Skeleton
                  key={i}
                  variant="rectangular"
                  height={180}
                  sx={{ borderRadius: 2 }}
                />
              ))
            : groupedTasks.inProgress.map((el) => (
                <TaskCard
                  key={el.id}
                  id={el.id}
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

          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <Skeleton
                  key={i}
                  variant="rectangular"
                  height={180}
                  sx={{ borderRadius: 2 }}
                />
              ))
            : groupedTasks.done.map((el) => (
                <TaskCard
                  key={el.id}
                  id={el.id}
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
