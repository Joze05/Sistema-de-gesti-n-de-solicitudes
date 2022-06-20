const db_connection = require("../config/Conexion");


exports.getAllRequest = (req, res) => {
    db_connection.sql.connect(db_connection.config, function (err) {
        if (err) {
            console.log(err);
        } else {
            var request = new db_connection.sql.Request();

            request.query(`EXEC [dbo].[sp_getAllRequests]`, function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    //console.log(result.recordset);
                    res.send(result.recordset);
                }
            });
        }
    });
};



exports.insertLegalResponse = (req, res) => {

    var { descripcion } = req.body;

    db_connection.sql.connect(db_connection.config, function (err) {

        if (err) {

            console.log(err)

        } else {


            var request = new db_connection.sql.Request();
            request.query(`EXEC [dbo].[sp_insertResponse] @descripcion = N'${descripcion}'`,
                function (err, result) {

                    if (err) {
                        console.log(err);
                    } else {

                        // send records as a response
                        res.json({ message: 'Se insertó correctamente' });
                    }

                });
        };

    });


}