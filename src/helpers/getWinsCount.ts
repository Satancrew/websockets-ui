import { allUsers } from "../models/db";
import { WinnersType } from "../utils/types";

export const getWinsCount = (): WinnersType[] => {
  let wins: WinnersType[] = [];
  allUsers.map((elem) => wins.push({ name: elem.name, wins: elem.wins }));
  console.log('WINS==', wins);
  return wins;
};
