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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { EditTaskModal, PriorityChip } from ".";
import { deleteTask, editTask } from "../../services/taskService";
import { useTasks } from "../../context/useTasks";
import { CardStatus } from "../../models";

type TodoCardProps = {
  id: number;
  title: string;
  description: string;
  status: number;
  priority: number;
  createdAt: string;
};

const statusNames: Record<number, string> = {
  1: "To Do",
  2: "In Progess",
  3: "Done",
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

  const handleEditTask = async (newStatus: number) => {
    try {
      const payload = {
        title,
        description,
        status: newStatus,
        priority: Number(priority),
      };

      await editTask(id, payload);
      await fetchTasks();
    } catch (error) {
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

            <Box sx={{ display: "flex", gap: 1 }}>
              <PriorityChip type={priority} />

              <Box>
                {status !== CardStatus.Todo && (
                  <Tooltip title={`Move to ${statusNames[status - 1]}`}>
                    <IconButton
                      onClick={() => handleEditTask(status - 1)}
                    >
                      <ArrowBackIcon />
                    </IconButton>
                  </Tooltip>
                )}

                {status !== CardStatus.Done && (
                  <Tooltip title={`Move to ${statusNames[status + 1]}`}>
                    <IconButton
                      onClick={() => handleEditTask(status + 1)}
                    >
                      <ArrowForwardIcon />
                    </IconButton>
                  </Tooltip>
                )}
              </Box>
            </Box>
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
