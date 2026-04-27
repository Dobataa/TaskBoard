import { Box, Typography, Chip, Skeleton } from "@mui/material";
import { TaskCard } from ".";
import type { Task } from "../../models";

type TaskColumnProps = {
  header: string;
  count: number;
  isLoading: boolean;
  tasks: Task[];
};

export default function TaskColumn({
  header,
  count,
  isLoading,
  tasks,
}: TaskColumnProps) {
  return (
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
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">{header}</Typography>
        {isLoading ? (
          <Skeleton variant="circular" width={30} height={30} />
        ) : (
          <Chip
            label={count}
            sx={{
              fontWeight: 600,
              bgcolor: "#fff",
            }}
          />
        )}
      </Box>

      {isLoading
        ? Array.from({ length: 3 }).map((_, i) => (
            <Skeleton
              key={i}
              variant="rectangular"
              height={180}
              sx={{ borderRadius: 2 }}
            />
          ))
        : tasks.map((el) => (
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
  );
}
