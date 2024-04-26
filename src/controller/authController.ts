import express from 'express';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import User, { getUserByEmail, getUserToken, IUserLoginProps } from '../model/User';
import { validatePassword } from '../helper/password';

dotenv.config();

export const loginUser = async (req: express.Request, res: express.Response) => {
  try {
    const {
      email,
      password
    }: IUserLoginProps = req.body;

    if(!email || !password) {
      return res.status(401).send('Please fill up all fields.');
    }

    const existingUser = await getUserByEmail(email).select('+password +authentication.tokens');
    if(!existingUser) {
      return res.status(401).send('Your email is not registered yet.');
    }

    if(!validatePassword(password, existingUser.password)) {
      return res.status(401).send('Your password is incorrect!');
    }

    const jwtToken = jwt.sign({email}, process.env.JWT_PRIVATE_KEY as string, {expiresIn: '1h'});
    existingUser.authentication?.tokens?.push({token: jwtToken});
    existingUser.save();

    // res.cookie('token', jwtToken);

    const user = await getUserByEmail(email);

    const response = {
      user: user,
      token: jwtToken
    }

    res.status(200).json(response).end();

  } catch (error) {
    res.status(400).json(error).end();
  }
};

export const logoutUser = async (req: express.Request, res: express.Response) => {
  try {
    const token = req.cookies['token'];

    let existingUser = await getUserToken(token).select('+authentication.tokens');
    if(!existingUser) {
      return res.status(401).send('Invalid token!');
    }

    existingUser?.authentication?.tokens?.pull({token: token});
    existingUser.save();

    // res.clearCookie('token');
    res.status(200).send('Logout successfully!');
  } catch (error) {
    res.status(400).json(error).end();
  }
};

export const authenticateUser = async (req: express.Request, res: express.Response) => {
  try {
    const user = req.body;

    res.status(200).json(user).end;
  } catch (error) {
    res.status(400).json(error).end();
  }
}