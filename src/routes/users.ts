import { Request, Response, Router } from "express";
import User from '../models/user';

const router: Router = Router();

// TODO: finish this endpoint
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

    User.findOne({
        where: {
            username
        }
    }).then( user => {
        if ( user ) {
            user.update({ password }).then(( updated ) => {
                if ( updated ){
                    res.status(200).json({
                        code: 200,
                        message: 'Resource Updated'
                    });
                }
            })
        }
    });
});

export default router;