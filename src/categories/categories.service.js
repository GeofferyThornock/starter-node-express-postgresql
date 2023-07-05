const knex = require("../db/connection");

function list(req, res, next) {
    return knex("categories").select("*");
}

module.exports = {
    list,
};
