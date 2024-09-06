import { integer, pgTable, text, boolean } from "drizzle-orm/pg-core";

export const todoTable = pgTable("todo_table", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").notNull().default(false),
});

export type InsertTodo = typeof todoTable.$inferInsert;
export type SelectTodo = typeof todoTable.$inferSelect;
