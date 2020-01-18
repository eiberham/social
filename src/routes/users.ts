import { Request, Response, Router } from "express";
import User from '../models/user';

const router: Router = Router();

// TODO: finish this endpoint
router.post(`/:id/change_password`, (req: Request, res: Response, next) => {
    const { id } = req.params;
    const {
        current: username,
        password,
        repeat
    } = req.body;

    // tslint:disable-next-line:no-console
    console.log("body: ", req.body);

    if ( password !== repeat ) {
        res.status(401).json({
            code: 401,
            message: 'The two passwords should be equal.'
        });
        return;
    }

    User.update(
        { password: `${password}` },
        {
            where: { id },
            returning: true
        }
    ).then( result => {
        if ( result ) {
            // tslint:disable-next-line:no-console
            console.log("user: ", result);
            res.status(200).json({
                code: 200,
                message: 'Resource Updated'
            });
        }
    }).catch( error => {
        // tslint:disable-next-line:no-console
        console.log("error: ", error);
    });
});

export default router;