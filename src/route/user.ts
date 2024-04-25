import express from "express";
import { registerUser } from "../controller/userController";

export default (router: express.Router) => {
  router.post('/api/register', registerUser);
};