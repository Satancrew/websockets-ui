import WebSocket from "ws";
import { RegisterUserType, WebSocketAdvanced } from "../utils/types";
import { sendResponse } from "./sendResponse";
import { RequestTypesEnum } from "../utils/enums";
import { getIdPlayer } from "../models/db";

export const registrPlayer = (ws: WebSocketAdvanced, registerData: RegisterUserType, id: number) => {
  const { name } = registerData;
  ws.playerId = id;
  const response = sendResponse(
    RequestTypesEnum.REG,{
      name: name,
      index: id,
      error: false,
      errorText: ""
    });

  ws.send(response);
};
