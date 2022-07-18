import { User } from '../../../models'
import bcrypt, { hash } from 'bcrypt'

const userMutations = {
  registerUser: async (_, args) => {
    const { name, email, password } = args.user
    const saltRounds = 10

    const hashedPassword = await bcrypt.hash(password, saltRounds)
    const user = await User.create({ name, email, password: hashedPassword })

    return user
  }
}

export default userMutations