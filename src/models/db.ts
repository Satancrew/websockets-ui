import { WebSocket } from "ws";
import { User } from "./user";
import { coloredText } from "../helpers/coloredText";

export const allUsers: User[] = [];

export const getIdPlayer = (): number => {
  return allUsers.length + 1;
};

export const checkUserName = (name: string): boolean => {
  const isCheck = allUsers.filter((elem) => elem.name === name).length;
  return !!isCheck;
};

export const checkUserId = (id: number) => {
  const findedUser = allUsers.find((elem) => elem && elem.idPlayer === id);

  if (findedUser) {
    return findedUser;
  } else {
    console.log(coloredText("User not found", "red"));
  }
};

export const findUserById = (id: number): User | undefined => {
  const user = allUsers.find((elem) => elem.idPlayer === id);

  if (user === undefined) {
    console.log(`User with id - ${coloredText(id.toString(), "blue")} not found`);
  } else {
    return user;
  }
};
