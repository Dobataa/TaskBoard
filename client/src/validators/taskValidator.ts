type Task = {
  title: string;
  description: string;
  status: number;
  priority: number;
};

export const validateTask = (body: Task) => {
  const errors: string[] = [];

  if (!body.title || body.title.trim() === "") {
    errors.push("Title is required");
  }

  if (body.title.length > 50) {
    errors.push("Title must be less than 50 characters");
  }

  if (!body.description || body.description.trim() === "") {
    errors.push("Description is required");
  }

  if (body.description.length > 100) {
    errors.push("Description must be less than 100 characters");
  }

  if (Number.isNaN(Number(body.status))) {
    errors.push("Status must be a number");
  }

  if (Number.isNaN(Number(body.priority))) {
    errors.push("Priority must be a number");
  }

  if (body.status <= 0 || body.status > 3) {
    errors.push("Invalid status");
  }

  if (body.priority <= 0 || body.priority > 3) {
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

export const validateStatusId = (statusId: number) => {
  const errors: string[] = [];

  if (Number.isNaN(statusId)) {
    errors.push("Status should be a number");
  }

  if (statusId <= 0 || statusId > 3) {
    errors.push("Invalid status");
  }

  return errors;
};
