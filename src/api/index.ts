import express, {Request, Response} from 'express';
import {MessageResponse} from '../types/Messages';
import {AnyObject} from 'mongoose';

const router = express.Router();

router.get<AnyObject, MessageResponse>('/', (_req: Request, res: Response) => {
  res.json({
    message: 'api v1',
  });
});

export default router;
