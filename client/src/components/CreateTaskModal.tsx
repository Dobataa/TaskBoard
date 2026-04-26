import {
  Box,
  Modal,
  Typography,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useState, type ChangeEvent } from "react";
import { createTask } from "../services/taskService";
import { useTasks } from "../context/useTasks";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#fff",
  boxShadow: 6,
  p: 4,
  borderRadius: 2,
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

const STATUS_OPTIONS = [
  { label: "TO DO", value: 1 },
  { label: "IN PROGRESS", value: 2 },
  { label: "DONE", value: 3 },
];

const PRIORITY_OPTIONS = [
  { label: "LOW", value: 1 },
  { label: "MEDIUM", value: 2 },
  { label: "HIGH", value: 3 },
];

type CreateTaskModalProps = {
  open: boolean;
  handleClose: () => void;
};

export default function CreateTaskModal({
  open,
  handleClose,
}: CreateTaskModalProps) {
  const { fetchTasks } = useTasks();
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<number | string>("");
  const [priority, setPriority] = useState<number | string>("");

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setStatus("");
    setPriority("");
  };

  const handleCreateTask = async() => {
    try {
      const newTask = {
        title,
        description,
        status: Number(status),
        priority: Number(priority),
      }

      await createTask(newTask);
      handleClose();
      resetForm();
      await fetchTasks();
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <Modal
      open={open}
      onClose={() => {
        handleClose();
        resetForm();
      }}
    >
      <Box sx={style}>
        <Typography variant="h5">Create Task</Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Grid size={12}>
            <TextField
              label="Title"
              variant="outlined"
              value={title}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
              fullWidth
            />
          </Grid>

          <Grid size={12}>
            <TextField
              label="Description"
              variant="outlined"
              multiline
              rows={3}
              value={description}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setDescription(e.target.value)
              }
              fullWidth
            />
          </Grid>

          <Box sx={{ display: "flex", gap: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                label="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                {STATUS_OPTIONS.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Priority</InputLabel>
              <Select
                label="Priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                {PRIORITY_OPTIONS.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
            <Button
              variant="contained"
              sx={{ bgcolor: "#7bc0e8", color: "#1c303b" }}
              onClick={handleCreateTask}
            >
              Create Task
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
