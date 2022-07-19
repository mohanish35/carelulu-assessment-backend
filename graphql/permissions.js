import { rule, shield, and } from 'graphql-shield'

const isAuthenticated = rule()((_, args, { user }) => {
  console.log(user)
  return Boolean(user)
})

const isReadingOwnUser = rule()((_, { uuid }, { user }) => {
  return user && user.uuid === uuid
})

export default shield({
  Query: {
    user: and(isAuthenticated, isReadingOwnUser)
  }
})
