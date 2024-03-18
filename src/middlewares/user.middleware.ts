import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { commonFieldsValidator } from "./common.utilities";

const createUserFieldsValidator =  (req: Request, res: Response, next: NextFunction) => {
  commonFieldsValidator(req,res);
  next();
};

const authenticateToken = (req:Request,res:Response,next:NextFunction) => {
  const JWT_SECRET = process.env.JWT_SECRET || 'default-key-secret';
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if(!token){
    return res.status(401).json({error:'No authorized'});
  }
  jwt.verify(token,JWT_SECRET,(err,_decoded)=>{
    if(err){
      console.error('Authentication error');
      return res.status(403).json({error:'Forbidden: Invalid access'})
    }
    next();
  })
}

export {authenticateToken,createUserFieldsValidator}