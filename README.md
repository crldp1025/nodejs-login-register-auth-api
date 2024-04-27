# Login, Registration and Authentication Rest API

This is a Rest API project created with NodeJS, ExpressJS and MongoDB.

# API URLs
- **Login** <br/>
***PATCH*** - */api/login/*
<br/><br/>
- **Register** <br/>
***POST*** - */api/register/*
<br/><br/>
- **Authenticate User** <br/>
***GET*** - */api/authenticate-user/*
<br/><br/>
- **Logout** <br/>
***PATCH*** - */api/logout/*

# Getting Started

## Step 1: Clone this repository

## Step 2: Install packages

To install the packages, run this command in terminal:

```bash
# using npm
npm install

# OR using Yarn
yarn install
```
## Step 5: Create .env file in the root directory
Make sure to include these varibales to your .env file:
```
MONGO_DB_URL=<Put here your MongoDB connection URL>
JWT_PRIVATE_KEY=<your private key string for token e.g. 'login-auth-jwt-private-key'>
```

## Step 4: Start the Application
Run this command in terminal to start the project:
```bash
npm run dev
```

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
