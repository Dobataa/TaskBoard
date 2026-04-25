import { supabase } from "../db/supabaseClient.js";

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

export const createTask = async (
  title: string,
  description: string,
  status: number,
  priority: number,
) => {
  const { error } = await supabase.from("tasks").insert([
    {
      title,
      description,
      status,
      priority,
      created_at: new Date().toISOString(),
    },
  ]);

  if (error) {
    throw error;
  }
};

export const updateTask = async (
  id: number,
  title: string,
  description: string,
  status: number,
  priority: number,
) => {
  const { error } = await supabase
    .from("tasks")
    .update({
      title,
      description,
      status,
      priority,
    })
    .eq("id", id);

  if (error) {
    throw error;
  }
};

export const deleteTask = async (id: number) => {
  const { error } = await supabase.from("tasks").delete().eq("id", id);

  if (error) {
    throw error;
  }
};
