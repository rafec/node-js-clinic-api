import express from "express";
import routes from "./routes/routes.js";
import db from "../src/database/database.js"

const serverPort = 3333;
const app = express();

app.use(express.json());
app.use(routes);

try {
    await db.sync();
    app.listen(serverPort, () => {
        console.log(`Server started on port ${serverPort}`);
    });

    console.log(`Connected to database ${process.env.DB_NAME}!`);
} catch (error) {
    console.log('Error while trying to connect to database!')
}

