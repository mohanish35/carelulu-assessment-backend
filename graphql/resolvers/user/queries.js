import { User } from '../../../models'

const userQueries = {
  user: async (_, { uuid }) => {
    const user = await User.findOne({ 
      where: { uuid },
      include: 'todos'
    })

    return user
  }
}

export default userQueries