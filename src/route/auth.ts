import express from 'express';
import { authenticateUser, loginUser, logoutUser } from '../controller/authController';
import { isAuthenticated } from '../middleware/authenticate';

export default (router: express.Router) => {
  router.patch('/api/login', loginUser);
  router.patch('/api/logout', logoutUser);
  router.get('/api/authenticate-user', isAuthenticated, authenticateUser);
};