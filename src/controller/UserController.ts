import express from 'express';
import User, { getUserByEmail, IUserRegistrationProps } from '../model/User';
import { encryptPassword } from '../helper/password';

export const registerUser = async (req: express.Request, res: express.Response) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      rePassword
    }: IUserRegistrationProps = req.body;

    if(!firstName || !lastName || !email || !password || !rePassword) {
      return res.status(401).send('Please fill up all the required fields.');
    }

    if(password !== rePassword) {
      return res.status(401).send(`Your password doesn't match!`);
    }

    const existingUser = await getUserByEmail(email);
    if(existingUser) {
      return res.status(401).send('Email is already taken!');
    }

    const encryptedPassword = encryptPassword(password);
    const user = User.create({firstName, lastName, email, password: encryptedPassword});

    res.status(200).send('Account registration successful!');
  } catch (error) {
    res.status(400).json(error).end(); 
  }
}