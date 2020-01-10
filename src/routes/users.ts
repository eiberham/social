import { Request, Response, Router } from "express";
import User from '../models/user';
import bcrypt from "bcrypt";

const router: Router = Router();

// TODO: finish this endpoint
router.post(`/:id/change_password`, async (req: Request, res: Response) => {
    const { id } = req.params;
    const { current, password, repeat } = req.body;
    const salt = 10;
    // tslint:disable-next-line:no-console
    console.log(id, current, password, repeat);

    if ( password !== repeat ) {
        res.status(401).json({
            code: 401,
            message: 'The two passwords should be equal.'
        });
        return;
    }

    bcrypt.hash(current, salt, async (err, hash) => {
        if ( err ) throw err;
        if ( hash ) {
            const user = await User.findOne({
                where: {
                    id,
                    password: hash
                }
            });

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
        }
    });
    /* res.status(200).json({
        message: 'All good cowboy'
    }) */
});

export default router;