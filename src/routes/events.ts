import { Request, Response, Router} from "express";
import Event from '../models/event';

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
    const events = await Event.findAll({});
    res.status(200).json({
        events
    });
});