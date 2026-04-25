import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { PriorityChip } from ".";

type TodoCardProps = {
  title: string;
  description: string;
  status: number;
  priority: number;
  createdAt: string;
};

export default function TaskCard({
  title,
  description,
  priority,
  createdAt,
}: TodoCardProps) {
  return (
    <Card sx={{ bgcolor: "#ffff", borderRadius: 2, height: 180 }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography gutterBottom sx={{ fontSize: "1.25rem" }}>
            {title}
          </Typography>

          <PriorityChip type={priority} />
        </Box>

        <Typography 
          variant="body2"
          sx={{
            maxHeight: 60,
            overflowY: "auto",
            pr: 1,
        }}
        >{description}</Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "auto"
          }}
        >
          <Typography>Created: {createdAt}</Typography>

          <Box>
            <Tooltip title="Edit Task">
              <IconButton>
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete Task">
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
