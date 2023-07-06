// Update with your config settings.
require("dotenv").config();
const path = require("path");
const {
    NODE_ENV = "development",
    DEVELOPMENT_DATABASE_URL,
    PRODUCTION_DATABASE_URL,
} = process.env;
const URL =
    NODE_ENV === "production"
        ? PRODUCTION_DATABASE_URL
        : DEVELOPMENT_DATABASE_URL;

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
        client: "postgresql",
        connection: URL,
        migrations: {
            directory: path.join(__dirname, "src", "db", "migrations"),
        },
        seeds: {
            directory: path.join(__dirname, "src", "db", "seeds"),
        },
    },
    production: {
        client: "postgresql",
        connection: URL,
        migrations: {
            directory: path.join(__dirname, "src", "db", "migrations"),
        },
        seeds: {
            directory: path.join(__dirname, "src", "db", "seeds"),
        },
    },
};
