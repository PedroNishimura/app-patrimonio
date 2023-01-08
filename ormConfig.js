module.exports = {
    type: 'mysql',
    host: 'mysqldb',
    port: 3306,
    username: 'root',
    password: 'mySqlAdm',
    database: 'myWallet',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migrations/*.js'],
    cli: {
        migrationsDir: 'src/migrations'
    }
}