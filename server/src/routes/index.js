
import { Router } from 'express';
import blogsRouter from './blogs';
import authRouter from './auth';


let router = Router();

router.use('/blogs', blogsRouter);
router.use('/auth', authRouter);


export default router;