import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function bootStrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('Database Connect successfully')
    app.listen(config.port, () => {
      console.log(`Application can listening on port ${config.port}`)
    })
  } catch (err) {
    console.log('Failed to Connect', err)
  }
}
bootStrap()
