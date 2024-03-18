import express from 'express';
import { login, register } from '../controllers/auth.controller';
import { loginFieldsValidator, registerFieldsValidator } from '../middlewares/auth.middleware';

const router = express.Router()

router.post('/register',registerFieldsValidator,register);

router.post('/login',loginFieldsValidator,login)

export default router;