import { User } from '../../../models'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { jwtSignature, jwtSignatureStrategy, saltRounds } from '../../../config/environment'

const userMutations = {
  registerUser: async (_, args) => {
    const { name, email, password } = args.user

    const hashedPassword = await bcrypt.hash(password, Number(saltRounds))
    const user = await User.create({ name, email, password: hashedPassword })

    return user
  },
  loginUser: async (_, args) => {
    const { email, password } = args.user
    const user = await User.findOne({ where: { email } })

    if (!user)
      throw new Error('Incorrect credentials')

    const isPasswordCorrect = await bcrypt.compare(password, user.password)

    if (!isPasswordCorrect)
      throw new Error('Incorrect credentials')

    return jwt.sign(
      { uuid: user.uuid, name: user.name },
      jwtSignature,
      { algorithm: jwtSignatureStrategy, subject: user.uuid, expiresIn: '1d' }
    )
  }
}

export default userMutations