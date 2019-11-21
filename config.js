module.exports = {
    db_config: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'di',
        debug: ['ComQueryPacket'],
        pool: {
            max: 100,
            min: 0,
            idle: 10000
        },
    },
}