const todoQueries = {
  todos: async (_, { userId }) => {
    return [{
      id: userId,
      body: "askljdfhaskldjfhas;ldfhasd"
    }]
  }
}

export default todoQueries