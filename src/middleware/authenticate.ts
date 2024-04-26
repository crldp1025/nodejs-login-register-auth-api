import express from 'express';
import { getUserByEmail, getUserToken } from '../model/User';
import { merge } from 'lodash';


export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const token = req.cookies['token'];

    if(!token) {
      return res.status(403).send('Unauthenticated!');
    }

    const existingUser = await getUserToken(token).select('+authentication.tokens');
    if(!existingUser) {
      return res.status(403).send('Unauthenticated!');
    }

    const user = await getUserByEmail(existingUser.email);
    merge(req, {body: user});

    return next();
  } catch (error) {
    res.status(400).json(error).end();
  }
};