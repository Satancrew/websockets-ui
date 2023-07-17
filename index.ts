import { httpServer } from "./src/http_server/index";
import { wsServer } from "./src/websocket_server/index";
import "dotenv/config";

const PORT = Number(process.env.HTTP_PORT);
const WS_PORT = Number(process.env.WS_PORT);

httpServer.listen(PORT);
wsServer.listen(WS_PORT);

console.log(`Http server: http://localhost:${PORT}`);
console.log(`Websocket server: http://localhost:${WS_PORT}`);
