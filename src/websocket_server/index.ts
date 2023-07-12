import WebSocket, { WebSocketServer } from "ws";
import { coloredText } from "../helpers/coloredText";
import { RegisterUserType, RequestType } from "../utils/types";
import { RequestTypesEnum } from "../utils/enums";
import { allUsers, checkUserName, getIdPlayer } from "../models/db";
import { User } from "../models/user";
import { registrPlayer } from "../helpers/registration";
import { sendError } from "../helpers/sendError";

const createWSServer = (port: number) => {
  const wss = new WebSocketServer({ port });

  wss.on("connection", (ws: WebSocket) => {
    ws.on("error", (err) => {
      console.log("Got error: ", err);
    });

    ws.on("message", (message: string) => {
      const request: RequestType = JSON.parse(message.toString());
      const { type, data, id } = request;
      const parsedData = JSON.parse(data.toString());

      console.log(`Type of message: ${coloredText(type, "green")}`);
      console.log(`Data: ${coloredText(JSON.stringify(parsedData), "blue")}`);

      try {
        switch (type) {
          case RequestTypesEnum.REG: {
            const user: RegisterUserType = parsedData;
            if (checkUserName(user.name)) {
              sendError(ws, RequestTypesEnum.REG, 'User already exist');
              console.log(`User ${coloredText(user.name, 'green')} already exist`)
            } else {
              allUsers.push(new User(ws, user.name, user.password, getIdPlayer()));
              registrPlayer(ws, user);
            }
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
