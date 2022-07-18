import { port } from './config/environment'
import app from './app'
import { sequelize } from './models'

const start = async () => {
  try {
    await sequelize.authenticate()
    app.listen(port)
    console.log(`🚀  GraphQL server running at port: ${port}`)
  } catch (err) {
    console.log('Not able to run GraphQL server', err)
  }
};

start();