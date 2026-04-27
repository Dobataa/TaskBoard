type Task = {
  title: string;
  description: string;
  status: number;
  priority: number;
};

export const getTasks = async (signal: AbortSignal) => {
  const response = await fetch("http://localhost:5000/tasks", {
    signal,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return response.json();
};

export const createTask = async (newTask: Task) => {
  const response = await fetch("http://localhost:5000/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTask),
  });

  if (!response.ok) {
    throw new Error("Failed to create task");
  }

  return response.json();
};

export const deleteTask = async (id: number) => {
  const response = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to create task");
  }

  return response.json();
};

export const editTask = async (taskId: number, editedTask: Task) => {
  const response = await fetch(`http://localhost:5000/tasks/${taskId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editedTask),
  });

  if (!response.ok) {
    throw new Error("Failed to edit task");
  }

  return response.json();
};
