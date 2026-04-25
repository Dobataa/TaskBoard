import { Grid, Box, Typography } from "@mui/material";
import { TaskCard } from "./components";
import { todo, inProgress, done } from "./mockedData";

export default function Board() {
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

          {todo.map((el) => (
            <TaskCard
              key={el.id}
              title={el.title}
              status={el.status}
              description={el.description}
              priority={el.priority}
              createdAt={el.createdAt}
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

          {inProgress.map((el) => (
            <TaskCard
              key={el.id}
              title={el.title}
              status={el.status}
              description={el.description}
              priority={el.priority}
              createdAt={el.createdAt}
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

          {done.map((el) => (
            <TaskCard
              key={el.id}
              title={el.title}
              status={el.status}
              description={el.description}
              priority={el.priority}
              createdAt={el.createdAt}
            />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}
