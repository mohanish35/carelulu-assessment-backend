import express from 'express'
import graphqlServer from './graphql'
import { expressjwt } from 'express-jwt'
import { jwtSignature, jwtSignatureStrategy } from './config/environment'

const app = express()

app.use(
  expressjwt({
    secret: jwtSignature,
    algorithms: [jwtSignatureStrategy],
    credentialsRequired: false
  })
)

graphqlServer.applyMiddleware({
  app,
  cors: false
})

export default app