module.exports = {
    development: {
        username: process.env.DB_USERNAME || "root",
        password: process.env.DB_PASSWORD || "root",
        database: process.env.DB_DATABASE || "node_api_boilerplate",
        host: process.env.DB_HOST || "127.0.0.1",
        dialect: "mysql",
        define: {
            timestamps: true,
            underscored: true,
        },
        secret: "ASuperStrongSecret",
    },
    test: {
        username: process.env.DB_USERNAME || "root",
        password: process.env.DB_PASSWORD || "root",
        database: process.env.DB_DATABASE || "node_api_boilerplate",
        host: process.env.DB_HOST || "127.0.0.1",
        dialect: "mysql",
        secret: "ASuperStrongSecret",
    },
    production: {
        username: process.env.DB_USERNAME || "root",
        password: process.env.DB_PASSWORD || "root",
        database: process.env.DB_DATABASE || "node_api_boilerplate",
        host: process.env.DB_HOST || "127.0.0.1",
        dialect: "mysql",
        secret: "ASuperStrongSecret",
    },
};
