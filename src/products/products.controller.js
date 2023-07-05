const productsService = require("./products.service");

function productExists(req, res, next) {
    productsService
        .read(req.params.productId)
        .then((data) => {
            if (data) {
                res.locals.data = data;
                return next();
            }
            next({ status: 404, message: "Product cannot be found." });
        })
        .catch(next);
}

function read(req, res, next) {
    const { data } = res.locals;
    res.json({ data });
}

function list(req, res, next) {
    productsService
        .list()
        .then((data) => res.json({ data }))
        .catch(next);
}

module.exports = {
    read: [productExists, read],
    list: [list],
};
