import { Request, Response, Router} from "express";
import User from "../models/user";
import bcrypt from "bcrypt";

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
                    //TODO: handle all the cookie stuff
                }
            });
        }

    }).catch( error => {
        
    });
});