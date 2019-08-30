const http = require("http");

import { get } from "./utils/request";
import { removeBullshitScripts, removeNoscript } from "./utils/helpers";

const sourceUrl = "https://medium.com";
const PORT = 9615;

http
  .createServer(async (req: Request, res: any) => {
    let result = await get(`${sourceUrl}${req.url}`);
    result = removeBullshitScripts(result);
    result = removeNoscript(result);

    res.writeHead(200, { "Content-Type": "html" });
    res.end(result);
  })
  .listen(PORT, (error: any) => {
    if (error) console.log(error);
    console.log("Here we are:", `http://localhost:${PORT}`);
  });
