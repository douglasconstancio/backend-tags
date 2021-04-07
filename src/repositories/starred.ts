import { EntityRepository, Repository } from 'typeorm'
import { Starred } from '../models/starred'

@EntityRepository(Starred)
export class StarredRepository extends Repository<Starred> {

    async findByFilter(userId: string, filter: string) {
        const search = `%${filter}%`
        const query = this.createQueryBuilder('starred')
            .select(['starred.repo_id'])
            .where(`starred.user_id = :userId`)
            .andWhere(`starred.tags ilike :search`)
            .groupBy('starred.id')
            .addGroupBy('starred.repo_id')
            .setParameters({ userId, search })

            return query.getMany()

    }

}
