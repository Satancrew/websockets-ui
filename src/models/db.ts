import { User } from "./user";

export const allUsers: User[] = [];

export const getIdPlayer = (): number => {
  return allUsers.length + 1;
};

export const checkUserName = (name: string): boolean => {
  const isCheck = allUsers.filter(elem => elem.name === name).length;
  return !!isCheck;
};
