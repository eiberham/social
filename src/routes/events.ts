import { Request, Response, Router} from "express";
import Event from '../models/event';

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
    const page: any = req.query.page -1;
    const size: any = req.query.size;

    const limit = 2;
    const offset: number = page * size;

    // TODO: fix types here
    const {count, rows}: any = await Event.findAndCountAll({
        limit,
        offset
    });
    res.status(200).json({
        code: 200,
        events: rows,
        pages: Math.floor(count / limit)
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