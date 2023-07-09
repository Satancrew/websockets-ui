import WebSocket, { WebSocketServer } from "ws";

const createWSServer = (port: number) => {
  const wss = new WebSocketServer({ port });

  wss.on("connection", (ws: WebSocket) => {
    ws.on("error", (err) => {
      console.log("Got error: ", err);
    });

    ws.on("message", (message: string) => {
      console.log("Received a message: ", message);

      ws.send(`Server received a message: ${message}`);
    });

    ws.send("Welcome to the server");
  });
};

export const wsServer = {
  listen: (port: number) => {
    createWSServer(port);
  }
};
