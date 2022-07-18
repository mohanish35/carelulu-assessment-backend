import { Todo, User } from '../../../models'

const todoMutations = {
  createTodo: async (_, args) => {
    const { userUuid, body } = args.todo
    const user = await User.findOne({ where: { uuid: userUuid } })
    const todo = await Todo.create({ body, userId: user.id })

    return todo
  }
}

export default todoMutations