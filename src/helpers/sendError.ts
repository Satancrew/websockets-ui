import { RequestTypesEnum } from "src/utils/enums";
import { WebSocket } from "ws";

export const sendError = (ws: WebSocket, type: RequestTypesEnum, errorText: string) => {
  ws.send(
    JSON.stringify({
      type: type,
      data: JSON.stringify({
        error: true,
        errorText: errorText,
      }),
      id: 0,
    })
  );
};
