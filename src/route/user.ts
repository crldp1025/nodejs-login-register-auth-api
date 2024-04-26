import express from "express";
import { registerUser } from "../controller/UserController";

export default (router: express.Router) => {
  router.post('/api/register', registerUser);
};