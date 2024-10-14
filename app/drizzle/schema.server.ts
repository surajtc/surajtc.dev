import * as t from "drizzle-orm/sqlite-core";
import { sqliteTable as table } from "drizzle-orm/sqlite-core";

function generateUniqueString(length: number = 12): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let uniqueString = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    uniqueString += characters[randomIndex];
  }
  return uniqueString;
}

// TODO: Use timestamps here
export const blogs = table("blogs", {
  id: t.int().primaryKey({ autoIncrement: true }),
  slug: t.text().$default(() => generateUniqueString(16)),
  title: t.text().notNull(),
  content: t.text().notNull(),
  createdAt: t.int("created_at").notNull(),
});
