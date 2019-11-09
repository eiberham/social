import { Request, Response, Router} from "express";
import User from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router: Router = Router();

router.post('/', async (req: Request, res: Response): Promise<any> => {
    const { user, password } = req.body;

    await User.findOne({ 
        where: {
            user
        }
    }).then( user => {
        if(user){
            bcrypt.compare(password, user.password, (err, matches) => {
                if(matches){
                    const payload: Object = {
                        user
                    };

                    jwt.sign(
                        payload,
                        process.env.JWT_SECRET!,
                        { expiresIn: "1h" },
                        (err, token) => {
                            if (err) throw err;
                            res.status(200).json({
                                message: "Authenticated",
                                token
                            });
                        }
                    );
                }
            });
        }

    }).catch( error => {
        
    });
});