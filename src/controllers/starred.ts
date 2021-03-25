import { AppError } from '../errors/app-error'
import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { StarredRepository } from '../repositories/starred'

export class StarredController {

    async create(request: Request, response: Response) {
        const starredRepository = getCustomRepository(StarredRepository)
        const { body: { user_id, repo_id, tags }, body } = request

        try {
            const sameUniqueKey = await starredRepository
                .findOne({ user_id, repo_id, tags })

            if (sameUniqueKey) {
                throw new AppError('This tag already exists.')
            }

            const result = await starredRepository.create(body)

            return response.json(result)
        } catch (error) {
            throw new AppError(error)
        }
    }

    async update(request: Request, response: Response) {
        const starredRepository = getCustomRepository(StarredRepository)
        const { body: { id, tags } } = request
        const starred = await starredRepository.findOneOrFail({ id })

        try {
            const repository = await starredRepository
                .save({ ...starred, tags })

            return response.json(repository)
        } catch (error) {
            throw new AppError(error)
        }
    }

    async remove(request: Request, response: Response) {
        const starredRepository = getCustomRepository(StarredRepository)
        const { id } = request.params

        try {
            await starredRepository.findOneOrFail(id)

            await starredRepository.delete(id)
            const result = await starredRepository.findOne(id)

            if (!result) {
                return response.json({ message: 'Deleted with success.' })
            }
        } catch (error) {
            throw new AppError(error)
        }
    }

    async find(request: Request, response: Response) {
        const starredRepository = getCustomRepository(StarredRepository)

        try {
            const { id, filter } = request.params
            const repositories = filter
                ? await starredRepository.findByFilter(id, filter)
                : await starredRepository.find({ user_id: id })

            return response.json(repositories)
        } catch (error) {
            throw new AppError(error)
        }
    }

    async findAll(request: Request, response: Response) {
        const starredRepository = getCustomRepository(StarredRepository)
        try {
            const repositories = await starredRepository.find()

            return response.json(repositories)
        } catch (error) {
            throw new AppError(error)
        }
    }

}
