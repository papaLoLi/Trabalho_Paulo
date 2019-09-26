const userForTest = require("../model/ususario");

module.exports = {
    async store(req, res) {
        const usu = await userForTest.create(req.body);

        return res.json(usu);
    },
    async list(req, res) {
        const retorno = await userForTest.find({});
        return res.json(retorno);
    },
    async index(req, res) {
        const usu = await userForTest.findOne({ email: req.email });
        if (usu !== null) {
            return res.json(usu);

        }
        else {
            return res.json({
                success: false,
                message: "ERROR 404 NOT FOUND"
            });
        }
    }
};