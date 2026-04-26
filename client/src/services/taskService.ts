export const getTasks = async (signal: AbortSignal) => {
  const response = await fetch("http://localhost:5000/tasks", {
    signal
  });

  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return response.json();
};
