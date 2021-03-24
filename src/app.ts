import 'reflect-metadata'
import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'
import routes from './routes'
import { AppError } from './errors/app-error'
import cors from 'cors'
import { json } from 'body-parser'
import methodOverride from 'method-override'
import { createConnection } from 'typeorm'

createConnection()
const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(json())
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(routes)
app.use(cors())

app.use((
    err: Error,
    request: Request,
    response: Response,
    _next: NextFunction
) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({ message: err.message })
    }

    return response.status(500).json({
        status: 'Error',
        message: `Internal server error ${err.message}`,
    })
})

export default app
