import db from "@/server/db";
import { todoTable } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export const getTodos = async () => {
  return db.select().from(todoTable).orderBy(todoTable.id);
};

export const getTodorById = async (id: number) => {
  return db.select().from(todoTable).where(eq(todoTable.id, id));
};
