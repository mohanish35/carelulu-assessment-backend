import { todoQueries, todoMutations } from './todo';
import { userQueries, userMutations } from './user'

const resolvers = {
  Query: {
    ...userQueries,
    ...todoQueries
  },
  Mutation: {
    ...userMutations,
    ...todoMutations
  }
}

export default resolvers