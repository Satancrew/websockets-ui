import { RequestTypesEnum } from "../utils/enums"
import { sendResponse } from "./sendResponse"
import { WebSocketAdvanced } from "../utils/types"

export const addUserToRoom = (game: number, user: number, ws: WebSocketAdvanced) => {
  const response = sendResponse(RequestTypesEnum.CREATE_GAME,  {
    idGame: game,
    idPlayer: user
  })

  ws.send(response)
}