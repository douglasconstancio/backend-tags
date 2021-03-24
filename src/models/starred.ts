import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('starred')
export class Starred {

    @PrimaryColumn()
    readonly id: string

    @Column()
    user_id: string

    @Column()
    repo_id: string

    @Column()
    tags: string

    @Column()
    description: string

    @Column()
    name: string

    @Column()
    url: string

    @CreateDateColumn()
    created_at: Date

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}
