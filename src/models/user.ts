import WebSocket from "ws";

export class User {
  name: string;
  password: string;
  idPlayer: number;
  ws: WebSocket;
  wins: number;

  constructor(ws: WebSocket, name: string, password: string, idPlayer: number) {
    this.ws = ws;
    this.name = name;
    this.password = password;
    this.idPlayer = idPlayer;
    this.wins = 0;
  }
}
