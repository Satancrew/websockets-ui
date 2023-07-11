import WebSocket, { WebSocketServer } from "ws";

const createWSServer = (port: number) => {
  const wss = new WebSocketServer({ port });

  wss.on("connection", (ws: WebSocket) => {
    ws.on("error", (err) => {
      console.log("Got error: ", err);
    });

    ws.on("message", (message: string) => {
      const request = JSON.parse(message.toString());
      console.log(request);
    });

    console.log('pewpewpew');
  });
};

export const wsServer = {
  listen: (port: number) => {
    createWSServer(port);
  }
};
