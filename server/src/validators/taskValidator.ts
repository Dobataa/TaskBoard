export const validateTask = (body: any) => {
  const errors: string[] = [];

  if (!body.title || body.title.trim() === "") {
    errors.push("Title is required");
  }

  if (!body.description || body.description.trim() === "") {
    errors.push("Description is required");
  }

  if (Number.isNaN(Number(body.status))) {
    errors.push("Status must be a number");
  }

  if (Number.isNaN(Number(body.priority))) {
    errors.push("Priority must be a number");
  }

  if (body.status < 0 || body.status > 3) {
    errors.push("Invalid status");
  }

  if (body.priority < 0 || body.priority > 3) {
    errors.push("Invalid priority");
  }

  return errors;
};

export const validateTaskId = (id: number) => {
  const errors: string[] = [];

  if (Number.isNaN(Number(id))) {
    errors.push("Task id must be a number");
  }

  if (id < 0) {
    errors.push("Id must be positive number");
  }

  return errors;
};
