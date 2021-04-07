import { MigrationInterface, QueryRunner, Table, TableUnique } from 'typeorm'

// TODO: Why migration class name should need a JavaScript timestamp appended? 😞
export class CreateStarred1616567230000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'starred',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'user_id',
                        type: 'varchar'
                    },
                    {
                        name: 'repo_id',
                        type: 'varchar'
                    },
                    {
                        name: 'tags',
                        type: 'varchar'
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'url',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )

        const categoryUniqueConstraint
            = new TableUnique({ columnNames: [ 'user_id', 'repo_id', 'tags'] })

        await queryRunner.createUniqueConstraint('starred', categoryUniqueConstraint)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('starred')
    }

}
