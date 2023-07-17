import { Room, RoomUserInfo, UpdateRoom, WebSocketAdvanced } from "../utils/types";
import { sendResponse } from "../helpers/sendResponse";
import { RequestTypesEnum } from "../utils/enums";
import { allUsers, findUserById } from "./db";

export const allRooms: Room[] = [];

export const createRoom = (ws: WebSocketAdvanced) => {
  if (allRooms.findIndex((elem) => elem.idPlayer === ws.playerId) < 0) {
    const createdRoom: Room = { idGame: allRooms.length + 1, idPlayer: ws.playerId };
    allRooms.push(createdRoom);

    const response = sendResponse(RequestTypesEnum.CREATE_GAME, {
      idGame: createdRoom.idGame,
      idPlayer: ws.playerId
    });

    ws.send(response);
  }
};

export const getFreeRooms = () => {
  const freeRooms: UpdateRoom[] = [];
  allRooms.forEach((elem) => {
    const userInfo: RoomUserInfo[] = [
      {
        name: allUsers[elem.idPlayer - 1]!.name,
        index: elem.idPlayer
      }
    ];
    freeRooms.push({
      roomId: elem.idGame,
      roomUsers: userInfo
    });
  });
  return [...freeRooms]
};

export const findUserInRoom = (roomId: number) => {
  const id = allRooms.findIndex((elem) => elem.idGame === roomId);
  const userId = allRooms[id]!.idPlayer;
  return userId;
}
