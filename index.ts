import { httpServer } from "./src/http_server/index";
import 'dotenv/config';

const PORT = process.env.HTTP_PORT;
const WS_PORT = process.env.WS_PORT;

httpServer.listen(PORT, () => {
  console.log(`Static http server: http://localhost:${PORT}`);
  console.log(`Websocket server: http://localhost:${WS_PORT}`);
});
