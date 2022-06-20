const db_conection = require('../config/conexion.js');

exports.insert = (req, res) => {

    var { linea, detalle1, evidenciaArchivo1 } = req.body;


    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {
            //var { linea, detalle1, evidenciaArchivo1 } = req.body;
            console.log(req.body);
            // create Request object
            var request = new db_conection.sql.Request();
            request.query(`EXEC [dbo].[sp_solicitudBoleta] @linea = N'${linea}', @detalle1 = N'${detalle1}', @evidenciaArchivo1 = N'${evidenciaArchivo1}'`, function (err, result) {

                if (err) {
                    console.log(err)
                } else {
                    // send records as a response
                    res.json("Envío exitoso");

                }

            });
        }

    });
};