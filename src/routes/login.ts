import { Request, Response, Router} from "express";
import User from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router: Router = Router();

router.post('/', (req: Request, res: Response) => {
    const { username, password } = req.body;

    User.findOne({
        where: {
            username
        }
    }).then( record => {

        if(record){
            bcrypt.compare(password, record.password, (fail, matches) => {
                if(fail) throw fail;
                if(matches){
                    const payload: any = {
                        user: record
                    };

                    jwt.sign(
                        payload,
                        process.env.JWT_SECRET!,
                        { expiresIn: "1h" },
                        (error, token) => {
                            if (error) throw error;
                            res.status(200).json({
                                message: "Authenticated",
                                token
                            });
                        }
                    );
                }
            });
        }

    }).catch( () => {
        res.status(500);
    });
});

export default router;