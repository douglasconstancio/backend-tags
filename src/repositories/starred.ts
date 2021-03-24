import { EntityRepository, Repository } from 'typeorm'
import { Starred } from '../models/starred'

@EntityRepository(Starred)
export class StarredRepository extends Repository<Starred> {}
