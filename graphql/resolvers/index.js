import { todoQueries } from "./todo";

const resolvers = {
  Query: {
    ...todoQueries
  }
}

export default resolvers