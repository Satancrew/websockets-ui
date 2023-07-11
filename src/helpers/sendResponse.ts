import { RequestTypesEnum } from "src/utils/enums";
import { WebSocket } from "ws";
import { coloredText } from "./coloredText";

export const sendResponse = (type: RequestTypesEnum, data: object): string => {
  return JSON.stringify({
    type,
    data: JSON.stringify(data)
  });
};
