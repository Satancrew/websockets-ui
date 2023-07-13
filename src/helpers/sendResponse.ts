import { RequestTypesEnum } from "../utils/enums";
import { WebSocket, WebSocketServer } from "ws";

export const sendResponse = (type: RequestTypesEnum, data: object): string => {
  return JSON.stringify({
    type,
    data: JSON.stringify(data)
  });
};

export const sendAll = (response: string, wsserver: WebSocketServer) => {
  wsserver.clients.forEach((elem) => {
    elem.readyState === WebSocket.OPEN && elem.send(response);
  })
}