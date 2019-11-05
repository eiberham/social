import { Request, Response, Router} from "express";

const router = Router();

router.post('/', (req: Request, res: Response) => {
    res.status(200).send('You made a post request to register resource')
});

export default router;