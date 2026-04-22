// This file was added by Polar and did not originate from the original main channel
// by MercuryWorkshop for a Wisp server to host Polar's Proxy.

import { server as wisp } from "@mercuryworkshop/wisp-js/server";
import express from "express";

const app = express();
const port = process.env.PORT || 5001;

app.get("/", (req, res) => {
    res.send("Wisp server is running.");
});

const server = app.listen(port, () => {
    console.log("Wisp server listening on port:", port);
});

server.on("upgrade", (request, socket, head) => {
    wisp.routeRequest(request, socket, head);
});
