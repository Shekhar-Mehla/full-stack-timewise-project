import express from "express";
import cors from "cors";

// building the webserver
const server = express();
// making database connection as soon as any request come to server

import { mongodbConnection } from "./src/Configuration/connection.js";
mongodbConnection();

// this method read the jason datar
server.use(express.json());
server.use(cors());

// base url for all the crud opertion for the tasks
const PORT = 8000;
const base_api_url_for_tasks = "/api/v1/tasks";
// imporing router endpont for tasks from router folder
import { router } from "./src/Routers/task.js";

server.use(base_api_url_for_tasks, router);

server.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:${PORT}`);
});
