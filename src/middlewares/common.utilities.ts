import { Request, Response } from 'express';

const commonFieldsValidator = (req: Request,res: Response) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'email field is required' });
  }
  if (!password) {
    return res.status(400).json({ message: 'password field is required' });
  }
}

export {commonFieldsValidator}