import { ApolloServer } from 'apollo-server-express';
import { applyMiddleware } from 'graphql-middleware'

import { env } from '../config/environment';
import executableSchema from './executableSchema'
import permissions from './permissions';

const apolloServer = new ApolloServer({
  schema: applyMiddleware(
    executableSchema, permissions
  ),
  playground: env.development,
  context: ({ req }) => {
    const user = req.auth || null
    return { user }
  }
});

export default apolloServer;