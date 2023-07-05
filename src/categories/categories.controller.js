const categoriesService = require("./categories.service");

function list(req, res, next) {
    categoriesService
        .list()
        .then((data) => {
            res.json({ data });
            console.log("received from database");
        })
        .catch(next);
}

module.exports = {
    list,
};
