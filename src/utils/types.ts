import { WebSocket } from "ws";
import { RequestTypesEnum } from "./enums";

export type RequestType = {
  type: RequestTypesEnum;
  data: string;
  id: number;
};

export type RegisterUserType = {
  name: string;
  password: string;
}

export type WebSocketType = WebSocket & {
  idPlayer: number;
}