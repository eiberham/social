import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import helmet from "helmet";

import { Sequelize } from "sequelize";
import dotenv from "dotenv";

import register from "./routes/register";

dotenv.config();

const app = express();
const port: string = process.env.PORT!;

const sequelize: Sequelize = new Sequelize(process.env.DB_CONNECTION_STRING!);

app.use(compression());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(helmet());

app.get( "/", ( req: Request, res: Response ) => {
    res.send( "Welcome to the appointy's web service x)" );
} );

app.use("/api/register", register);

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );