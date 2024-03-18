import express from 'express';
import { authenticateToken, createUserFieldsValidator } from '../middlewares/user.middleware';
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../controllers/users.controller';

const router = express.Router()

router.get('/',authenticateToken,getAllUsers);
router.post('/',[authenticateToken,createUserFieldsValidator],createUser);
router.get('/:id',authenticateToken,getUserById);
router.put('/:id',authenticateToken,updateUser);
router.delete('/:id',authenticateToken,deleteUser);

export default router;