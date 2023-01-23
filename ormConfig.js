require('dotenv').config();

module.exports = {
    type: 'mysql',
    host: process.env.HOST_DOCKER,
    port: process.env.PORT,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migrations/*.js'],
    autoLoadEntities: true,
    synchronize: true,
    cli: {
        migrationsDir: 'src/migrations'
    }
}