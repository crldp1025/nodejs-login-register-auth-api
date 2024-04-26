import mongoose from 'mongoose';

export interface IUserLoginProps {
  email: string;
  password: string;
};

export interface IUserRegistrationProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rePassword: string;
};

const TokenSchema = new mongoose.Schema({
  token: String
});

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    authentication: {
      tokens: {
        type: [TokenSchema],
        required: false,
        select: false
      }
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', UserSchema);

export const getUserByEmail = (email: string) => User.findOne({email});
export const getUserToken = (token: string) => User.findOne({'authentication.tokens.token': token});

export default User;