import { coloredText } from "../helpers/coloredText";
import { GameType } from "../utils/types";

interface UsersID {
  [key: number]: number;
}
export const allGames: GameType[] = [];

export const createNewGame = (userdId: UsersID) => {
  const newGame: GameType = {
    idGame: allGames.length + 1,
    idFirstPlayer: userdId[0]!,
    idSecondPlayer: userdId[1]!
  };
  allGames.push(newGame);
  return newGame.idGame;
};

export const findBoard = (id: number) => {
  const board = allGames.find((elem) => elem.idGame === id);

  if (!board) {
    console.log(coloredText("Game not founded", "red"));
  } else {
    return board;
  }
};