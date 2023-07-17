import { GameType } from '../utils/types';

interface UsersID {
  [key: number]: number;
}
export const allGames: GameType[] = [];

export const createNewGame = (userdId: UsersID) => {
  const newGame: GameType = {
    idGame: allGames.length + 1,
    idFirstPlayer: userdId[0]!,
    idSecondPlayer: userdId[1]!,
  }
  allGames.push(newGame);
}