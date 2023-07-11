import WebSocket from "ws";
import { RegisterUserType } from "../utils/types";
import { sendResponse } from "./sendResponse";
import { RequestTypesEnum } from "../utils/enums";
import { getIdPlayer } from "../models/db";

export const registrPlayer = (ws: WebSocket, registerData: RegisterUserType) => {
  const { name } = registerData;
  const response = sendResponse(
    RequestTypesEnum.REG,{
      name: name,
      index: getIdPlayer(),
      error: false,
      errorText: ""
    });

  ws.send(response);
};
