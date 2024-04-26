import bcrypt from 'bcrypt';

export const encryptPassword = (password: string) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, saltRounds);
};

export const validatePassword = (reqPassword: string, userPassword: string) => {
  return bcrypt.compareSync(reqPassword, userPassword);
};