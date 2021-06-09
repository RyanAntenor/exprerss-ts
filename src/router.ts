import { Router } from 'express';
import { homePage } from './controllers/homepage.ctrl';

export const router = Router();

router.get('/', homePage );
