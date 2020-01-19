import { Request, Response, Router } from "express";
import User from '../models/user';

const router: Router = Router();

router.post(`/:id/change_password`, (req: Request, res: Response) => {
    const { id } = req.params;
    const {
        current: username,
        password,
        repeat
    } = req.body;

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
            where: { id, username },
            individualHooks: true,
            returning: true
        }
    ).then( result => {
        if ( result ) {
            res.status(200).json({
                code: 200,
                message: 'Resource Updated'
            });
        }
    }).catch( error => {
        res.status(500).json({
            code: 500,
            message: 'Internal Server Error'
        })
    });
});

export default router;