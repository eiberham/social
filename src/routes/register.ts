import { Request, Response, Router} from "express";
import User from "../models/user";

const router: Router = Router();

router.post('/', async (req: Request, res: Response) => {
    const { name, email, country, username, password } = req.body;

    try {
        await User.findOrCreate({
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