const express = require('express');
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.json({ message: "Esta es una api en NodeJS" });
});

app.use(require("./src/routers/LoginRouter"));
app.use(require("./src/routers/RequestRouter"));
app.use(require("./src/routers/LegalResponseRouter"));
app.use(require("./src/routers/DetailedResponseRouter"));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});