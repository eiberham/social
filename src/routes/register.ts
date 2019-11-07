import { Request, Response, Router} from "express";
import User from "../models/user";

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
    const { name, email, country, username, password } = req.body;

    // TODO: cypher pass before creating a new record

    try {
        await User.findOrCreate({where: { username, email }, defaults: {}})
        .then(([user, created]) => {
            if (user instanceof User){
                res.status(200).send('The user already exists');
                return;
            }

            if(created){
                res.send(201);
            }

        })
    } catch (error) {
        res.status(500).send('Internal server error')
    }

});

export default router;