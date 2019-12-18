import { Request, Response, Router} from "express";
import User from "../models/user";
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const router: Router = Router();

router.post('/', async (req: Request, res: Response) => {
    const { name, email, country, username, password, token } = req.body;

    if(token){
        const { data } = await axios.post(`${process.env.RECAPTCHA_VERIFY_URL}`, {
            secret: `${process.env.RECAPTCHA_SECRET_KEY}`,
            response: token
        });

        if(!data.success){
            res.status(401).json({
                code: 401,
                message: 'Recaptcha validation failed'
            });
            return;
        }
    }

    try {
        User.findOrCreate({
            where: { username, email },
            defaults: { name, email, country, username, password }
        })
        .then(([user, created]) => {
            if (user instanceof User){
                res.status(200).send('The user already exists');
                return;
            }

            if(created){
                res.status(201).json({
                    code: 201,
                    message: 'Resource created'
                });
            }

        })
    } catch (error) {
        res.status(500).send('Internal server error')
    }

});

export default router;