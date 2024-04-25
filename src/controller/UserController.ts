import express from 'express';
import mongoose from 'mongoose';
import User from '../model/User';

export const registerUser = async (req: express.Request, res: express.Response) => {
  try {
    const user = User.create(req.body);

    res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    res.status(400).json(error).end();
  }
}