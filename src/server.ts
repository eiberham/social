import express from "express";

import { Sequelize } from "sequelize";

const app = express();
const port = 3000;

const sequelize = new Sequelize('postgres://postgres@localhost:5432/appointy');

app.get( "/", ( req, res ) => {
    res.send( "Welcome to the appointy's web service x)" );
} );

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );