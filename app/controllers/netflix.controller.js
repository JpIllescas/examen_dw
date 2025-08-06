 const db = require("../models");
const Netflix = db.netflixs;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.nombre, !req.body.sinopsis, !req.body.actores, !req.body.duracion, !req.body.tipo, !req.body.categoria, !req.body.anio_lanzamiento) {
        res.status(400).send({
            message: "Todos los campos son requeridos!"
        });
        return;
    }

    const netflix = {
        nombre: req.body.nombre,
        sinopsis: req.body.sinopsis,
        actores: req.body.actores,
        duracion: req.body.duracion,
        tipo: req.body.tipo,
        categoria: req.body.categoria,
        anio_lanzamiento: req.body.anio_lanzamiento
    };

    Netflix.create(netflix)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Hubo un error al crear en Netflix."
            });
        });
};

exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Netflix.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Netflixs."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Netflix.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Netflix with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Netflix.update(req.body, {
        where: { id_netflix: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Netflix was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Netflix with id=${id}. Maybe Netflix was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Netflix with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Netflix.destroy({
        where: { id_netflix: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Netflix was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Netflix with id=${id}. El netflix no fue encontado!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Netflix.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Netflixs were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Netflixs."
            });
        });
};

exports.findAllStatus = (req, res) => {
    Netflix.findAll({ where: { status: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Netflix."
            });
        }); 
};