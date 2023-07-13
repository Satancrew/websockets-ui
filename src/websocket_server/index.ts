import WebSocket, { WebSocketServer } from "ws";
import { coloredText } from "../helpers/coloredText";
import { RegisterUserType, RequestType, WebSocketAdvanced } from "../utils/types";
import { RequestTypesEnum } from "../utils/enums";
import { allUsers, checkUserName, getIdPlayer } from "../models/db";
import { User } from "../models/user";
import { registrPlayer } from "../helpers/registrPlayer";
import { sendError } from "../helpers/sendError";
import { createRoom } from "../models/rooms";

const createWSServer = (port: number) => {
  const wss = new WebSocketServer({ port });

  wss.on("connection", (ws: WebSocketAdvanced) => {
    ws.on("error", (err) => {
      console.log("Got error: ", err);
    });

    ws.on("message", (message: string) => {
      console.log(JSON.parse(message), 'MESSAGE');
      const request: RequestType = JSON.parse(message.toString());
      const { type, data, id } = request;
      console.log(request)
      request.id = getIdPlayer();

      console.log(`Type of message: ${coloredText(type, "green")}`);

      try {
        switch (type) {
          case RequestTypesEnum.REG: {

            const parsedData = JSON.parse(data.toString());
            console.log(`Data: ${coloredText(JSON.stringify(parsedData), "blue")}`);

            const user: RegisterUserType = parsedData;

            if (checkUserName(user.name)) {
              sendError(ws, RequestTypesEnum.REG, "User already exist");
              console.log(`User ${coloredText(user.name, "green")} already exist`);
            } else {
              allUsers.push(new User(ws, user.name, user.password, request.id));
              console.log(allUsers, 'ALLUSERS!!!')
              registrPlayer(ws, user, request.id);
            }

            break;
          }

          case RequestTypesEnum.CREATE_ROOM: {
            createRoom(ws);

            break;
          }
          default:
            console.log("default owo");
        }
      } catch (error) {
        console.log(error, "error!!!!!!");
      }
    });

    console.log("pewpewpew");
  });
};

export const wsServer = {
  listen: (port: number) => {
    createWSServer(port);
  }
};
