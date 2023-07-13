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

export type WebSocketAdvanced = WebSocket & {
  playerId: number;
  gameId: number;
}

export type Room = {
  idGame: number;
  idPlayer: number;
};