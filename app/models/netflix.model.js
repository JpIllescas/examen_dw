module.exports = (sequelize, Sequelize) => {
    const Netflix = sequelize.define("netflix", {
        id_netflix:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        sinopsis: {
            type: Sequelize.STRING
        },
        actores: {
            type: Sequelize.STRING
        },
        duracion: {
            type: Sequelize.STRING
        },
        tipo: {
            type: Sequelize.STRING
        },
        categoria: {
            type: Sequelize.STRING
        },
        anio_lanzamiento: {
            type: Sequelize.INTEGER
        }
        
    });
    return Netflix;
};