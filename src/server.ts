import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import User from "./models/user";
import register from "./routes/register";
import login from "./routes/login";

import dotenv from "dotenv";
dotenv.config();
// tslint:disable-next-line:no-console
User.sync({force: false}).then(()=> console.log("done"));

const app = express();
const port: string = process.env.PORT!;

app.use(compression());
app.use(bodyParser());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(helmet());

app.get( "/", ( req: Request, res: Response ) => {
    res.send( "Welcome to the appointy's web service x)" );
} );

app.use("/api/register", register);
app.use("/api/login", login);

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );