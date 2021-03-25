import { Brackets, EntityRepository, Repository } from 'typeorm'
import { Starred } from '../models/starred'

@EntityRepository(Starred)
export class StarredRepository extends Repository<Starred> {

    // TODO: Use setParameters()
    async findByFilter(userId: string, filter: string) {
        const search = `%${filter || ''}%`
        return this.createQueryBuilder('starred')
            .select([
                'starred.id',
                'starred.user_id',
                'starred.repo_id',
                'starred.tags',
                'starred.description',
                'starred.name',
                'starred.url',
            ])
            .where(`starred.user_id = '${userId}'`)
                .andWhere(new Brackets(qb => qb
                    .where(`starred.description ilike '${search}'`)
                    .orWhere(`starred.tags ilike '${search}'`)))
                .getMany()
    }

}
