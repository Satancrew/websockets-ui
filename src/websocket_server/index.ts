import { WebSocketServer } from "ws";
import { coloredText } from "../helpers/coloredText";
import {
  AddUserToRoomType,
  RegisterUserType,
  RequestType,
  WebSocketAdvanced
} from "../utils/types";
import { RequestTypesEnum } from "../utils/enums";
import { allUsers, checkUserId, checkUserName, getIdPlayer } from "../models/db";
import { User } from "../models/user";
import { registrPlayer } from "../helpers/registrPlayer";
import { sendError } from "../helpers/sendError";
import { createRoom, findUserInRoom } from "../models/rooms";
import { checkPlayersStatus } from "../helpers/checkPlayersStatus";
import { createNewGame, findBoard } from "../models/games";
import { addUserToRoom } from "../helpers/addUserToRoom";
import { sendResponse } from "../helpers/sendResponse";

const createWSServer = (port: number) => {
  const wss = new WebSocketServer({ port });

  wss.on("connection", (ws: WebSocketAdvanced) => {
    ws.on("error", (err) => {
      console.log("Got error: ", err);
    });

    ws.on("message", (message: string) => {
      const request: RequestType = JSON.parse(message.toString());
      const { type, data, id } = request;

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
              registrPlayer(ws, user, request.id);
              checkPlayersStatus(wss);
            }

            break;
          }

          case RequestTypesEnum.CREATE_ROOM: {
            createRoom(ws);
            checkPlayersStatus(wss);
            break;
          }

          case RequestTypesEnum.ADD_PLAYER: {
            const roomId: AddUserToRoomType = JSON.parse(request.data);
            const users = [findUserInRoom(roomId.indexRoom), checkUserId(ws.playerId)!];
            const game = createNewGame(users);
            addUserToRoom(game, users[1]!, ws);
            checkPlayersStatus(wss);

            break;
          }
          default:
            break;
        }
      } catch (error) {
        console.log(coloredText("Error!", "red"));
      }
    });
  });
};

export const wsServer = {
  listen: (port: number) => {
    createWSServer(port);
  }
};
