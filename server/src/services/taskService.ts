import { supabase } from "../db/supabaseClient.js";
import { Task } from "../types/Task.js";

export const getTasks = async () => {
  const { data, error } = await supabase.from("tasks").select("*");

  if (error) {
    throw error;
  }

  return data;
};

export const getTaskById = async (id: number) => {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  return data;
};

export const getTaskByStatusId = async (statusId: number) => {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("status", statusId);

  if (error) {
    throw error;
  }

  return data;
};

export const createTask = async ({
  title,
  description,
  status,
  priority,
}: Task) => {
  const { data, error } = await supabase
    .from("tasks")
    .insert([
      {
        title,
        description,
        status,
        priority,
        created_at: new Date().toISOString(),
      },
    ])
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
};

export const updateTask = async (
  id: number,
  { title, description, status, priority }: Task,
) => {
  const { data, error } = await supabase
    .from("tasks")
    .update({
      title,
      description,
      status,
      priority,
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw error;
  }
  
  return data;
};

export const deleteTask = async (id: number) => {
  const { error } = await supabase.from("tasks").delete().eq("id", id);

  if (error) {
    throw error;
  }
};
