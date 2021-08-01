import * as dotenv from "dotenv";
import App from "./App";
import Db from "./Db";

dotenv.config();

const PORT : string | number = process.env.PORT || 3000;
const app : App = new App(PORT);

const DB_URI : string = process.env.DB_URI || "";
const db : Db = new Db(DB_URI);

app.listen();
db.connect();