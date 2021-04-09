import { config } from 'dotenv'
import app from './app'

config()

app.listen(4000, () => console.log('Server is running!'))
