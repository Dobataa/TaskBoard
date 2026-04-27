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

  const data = await response.json();

  if(!response.ok){
    throw new Error(data.errors.join(", ") || data.error || "Something went wrong");
  }

  return data;
};

export const getTasksByStatusId = async (signal: AbortSignal, statusId: number) => {
  const response = await fetch(`http://localhost:5000/tasks/status/${statusId}`, {
    signal,
  });

  const data = await response.json();

  if(!response.ok){
    throw new Error(data.errors.join(", ") || data.error || "Something went wrong");
  }

  return data;
};

export const createTask = async (newTask: Task) => {
  const response = await fetch("http://localhost:5000/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTask),
  });

  const data = await response.json();

  if(!response.ok){
    throw new Error(data.errors.join(", ") || data.error || "Something went wrong");
  }

  return data;
};

export const deleteTask = async (id: number) => {
  const response = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();

  if(!response.ok){
    throw new Error(data.errors.join(", ") || data.error || "Something went wrong");
  }

  return data;
};

export const editTask = async (taskId: number, editedTask: Task) => {
  const response = await fetch(`http://localhost:5000/tasks/${taskId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editedTask),
  });

  const data = await response.json();

  if(!response.ok){
    throw new Error(data.errors.join(", ") || data.error || "Something went wrong");
  }

  return data;
};
