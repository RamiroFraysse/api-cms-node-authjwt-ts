import { Request, Response, NextFunction } from 'express';
import { commonFieldsValidator } from './common.utilities';


const loginFieldsValidator =  (req: Request, res: Response, next: NextFunction) => {
  commonFieldsValidator(req,res);
  next();
};

const registerFieldsValidator = (req: Request, res: Response, next: NextFunction) => {
  commonFieldsValidator(req,res);
  const { password, repeatPassword } = req.body;
  if (!repeatPassword) {
    return res.status(400).json({ message: 'repeatPassword field is required' });
  }
  if (password !== repeatPassword) {
    return res.status(400).json({ message: 'Passwords are not matching' });
  }
  next();
};

export {
  loginFieldsValidator,
  registerFieldsValidator
}