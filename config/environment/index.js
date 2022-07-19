import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;
const jwtSignature = process.env.JWT_SIGNATURE
const jwtSignatureStrategy = process.env.JWT_SIGNATURE_STRATEGY
const saltRounds = process.env.SALT_ROUNDS

// You may use this as a boolean value for different situations
const env = {
  development: process.env.NODE_ENV === 'development',
  test: process.env.NODE_ENV === 'test',
  staging: process.env.NODE_ENV === 'staging',
  production: process.env.NODE_ENV === 'production',
};

export { port, env, jwtSignature, jwtSignatureStrategy, saltRounds };