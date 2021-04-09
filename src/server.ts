import { config } from 'dotenv'
import app from './app'

config()

app.listen(process.env.PORT || 4000, () => console.log('Server is running!'))
