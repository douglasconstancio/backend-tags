module.exports = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    autoSchemaSync: true,
    migrations: ['dist/src/database/migrations/**.js'],
    entities: ['dist/src/models/**.js'],
    cli: {
        migrationsDir: './src/database/migrations'
    },
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    }
}

