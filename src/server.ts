import express, { Request, Response } from "express";
import fs from "fs";
import https from "https";
import bodyParser from "body-parser";
import cors from "cors";
import compression from "compression";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import User from "./models/user";
import register from "./routes/register";
import login from "./routes/login";

import dotenv from "dotenv";
dotenv.config();
// tslint:disable-next-line:no-console
User.sync({force: false}).then(() => console.log("done"));

const app = express();
const port: string = process.env.PORT!;

app.use((req, res, next) => {
    res.append("Access-Control-Allow-Origin", req.headers.origin || "*");
    res.append("Access-Control-Allow-Credentials", "true");
    res.append("Access-Control-Allow-Methods", [
        "GET",
        "OPTIONS",
        "PUT",
        "POST",
        "PATCH",
        "DELETE"
    ]);
    res.append(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, X-Access-Token"
    );
    if (req.method === "OPTIONS") {
        res.status(200).end();
    } else {
        next();
    }
});

app.use(compression());
app.use(bodyParser());
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(helmet());

app.get( "/", ( req: Request, res: Response ) => {
    res.send( "Welcome to the appointy's web service x)" );
} );

app.use("/api/register", register);
app.use("/api/login", login);

/**
 * The readFileSync function evaluates relative paths
 * to the current working directory of the node executable
 */
https.createServer({
    key: fs.readFileSync("./src/certs/key.pem"),
    cert: fs.readFileSync("./src/certs/cert.pem"),
    passphrase: process.env.TLS_PASSPHRASE
}, app).listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at https://localhost:${ port }` );
});