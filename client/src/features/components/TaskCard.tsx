import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import { useState, memo } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { EditTaskModal, PriorityChip } from ".";
import { deleteTask } from "../../services/taskService";
import { useTasks } from "../../context/useTasks";

type TodoCardProps = {
  id: number;
  title: string;
  description: string;
  status: number;
  priority: number;
  createdAt: string;
};

const TaskCard = memo(function TaskCard({
  id,
  title,
  description,
  status,
  priority,
  createdAt,
}: TodoCardProps) {
  const { removeTask, fetchTasks } = useTasks();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB");
  };

  const handleDeleteTask = async () => {
    try {
      await deleteTask(id);

      removeTask(id);
    } catch (error) {
      await fetchTasks();
      console.log(error);
    }
  };

  return (
    <>
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
          >
            {description}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: "auto",
            }}
          >
            <Typography>Created: {formatDate(createdAt)}</Typography>

            <Box>
              <Tooltip title="Edit Task">
                <IconButton onClick={() => setIsEditModalOpen(true)}>
                  <EditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete Task">
                <IconButton onClick={handleDeleteTask}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <EditTaskModal
        open={isEditModalOpen}
        handleClose={() => setIsEditModalOpen(false)}
        taskId={id}
        titleProps={title}
        descriptionProps={description}
        statusProps={status}
        priorityProps={priority}
      />
    </>
  );
});

export default TaskCard;