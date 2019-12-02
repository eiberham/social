import { Request, Response, Router} from "express";
import Event from '../models/event';

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
    const events: Event[] = await Event.findAll({});
    res.status(200).json({
        code: 200,
        events
    });
});

// TODO: finish and enhance this endpoint
router.post('/', async (req: Request, res: Response) => {
    const {
        name,
        description,
        organizer,
        opening,
        ending
    } = req.body;

    const response = await Event.create({
        name,
        description,
        organizer,
        opening,
        ending
    });

    res.json({
        code: 201,
        message: 'Resource created'
    });
});

export default router;