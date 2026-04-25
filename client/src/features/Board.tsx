import { Grid } from "@mui/material";
import { BoardHeader, TaskCard } from "./components";
import { todo, inProgress, done } from "./mockedData";

export default function Board() {
  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid size={4} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <BoardHeader name={"TO DO"} />

        {todo.map((el) => (
          <TaskCard 
            key={el.id} 
            title={el.title}
            status={el.status} 
            description={el.description}
            priority={el.priority}
          />
        ))}

      </Grid>
      <Grid size={4} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <BoardHeader name={"IN PROGRESS"} />

        {inProgress.map((el) => (
          <TaskCard 
            key={el.id} 
            title={el.title}
            status={el.status} 
            description={el.description}
            priority={el.priority}
          />
        ))}
      </Grid>
      <Grid size={4} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <BoardHeader name={"DONE"} />

        {done.map((el) => (
          <TaskCard 
            key={el.id} 
            title={el.title}
            status={el.status} 
            description={el.description}
            priority={el.priority}
          />
        ))}
      </Grid>
    </Grid>
  );
}
