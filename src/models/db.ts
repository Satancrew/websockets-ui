import { User } from "./user";

export const allUsers: User[] = [];

export const getIdPlayer = (): number => {
  return allUsers.length + 1;
}