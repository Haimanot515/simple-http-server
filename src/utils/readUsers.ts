import { promises as fs } from "fs";
import path from "path";
import { User } from "../types/user.interface";

export async function readUsers(): Promise<User[]> {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "users.json");

    const data = await fs.readFile(filePath, "utf-8");

    const users: User[] = JSON.parse(data);

    return users;
  } catch (error) {
    console.error("Error reading users file:", error);
    throw new Error("Failed to read users data");
  }
}