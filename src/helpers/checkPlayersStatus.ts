import { getFreeRooms } from "../models/rooms";
import { RequestTypesEnum } from "../utils/enums";
import { sendAll, sendResponse } from "./sendResponse";
import { WebSocketServer } from "ws";

export const checkPlayersStatus = (wsserver: WebSocketServer) => {
  sendAll(sendResponse(RequestTypesEnum.UPDATE_R, [...getFreeRooms()]), wsserver);
};
