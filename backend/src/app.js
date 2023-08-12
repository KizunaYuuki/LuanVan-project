// import express from 'express';
// import cors from 'cors';
// const app = express()
// app.use(express.json())

// import { config } from 'dotenv'
// config();

// import { getNote, getNotes, createNote } from '../src/models/db.js'

// const port = process.env.PORT

// app.get('/', cors(), (req, res) => {
//     res.send('Hello World!')
// })

// app.get('/notes', async (req, res) => {
//     const notes = await getNotes();
//     res.send(notes)
// })

// app.get("/notes/:id", async (req, res) => {
//     const id = req.params.id;
//     const note = await getNote(id);
//     res.send(note);
// })

// app.post("/notes", async (req, res) => {
//     const { title, contents } = req.body;
//     const note = await createNote(title, contents);
//     res.status(201).send(note);
// })

// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(500).send('Something broke!')
// })


// app.listen(port, () => {
//     console.log(`API Server listening on port ${port}`)
// })


// async function startServer() {
//     try {
//         // await MongoDB.connect(config.db.uri);
//         const pool = mysql.createPool({
//             host: 'localhost:3306',
//             user: 'root',
//             password: 'TIMEJIKAN',
//             database: 'data'
//         })
//         const queryResult = await pool.query('SELECT * FROM `users`');
//         console.log(queryResult); // This will print the query result to the console.
//         console.log("Connected to the database!")

//         app.listen(port, () => {
//             console.log(`Server is running on port ${port}\nhttp://localhost:${port}/`);
//         });
//     }
//     catch (error) {
//         console.log("Cannot connect to the database!", error)
//         process.exit();
//     }
// }
// startServer();




const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const helmet = require("helmet");
const nocache = require("nocache");
const { messagesRouter } = require("./messages/messages.router");
const { errorHandler } = require("./middleware/error.middleware");
const { notFoundHandler } = require("./middleware/not-found.middleware");

dotenv.config();

if (!(process.env.PORT && process.env.CLIENT_ORIGIN_URL)) {
    throw new Error(
        "Missing required environment variables. Check docs for more info."
    );
}

const PORT = parseInt(process.env.PORT, 10);
const CLIENT_ORIGIN_URL = process.env.CLIENT_ORIGIN_URL;

const app = express();
const apiRouter = express.Router();

app.use(express.json());
app.set("json spaces", 2);

app.use(
    helmet({
        hsts: {
            maxAge: 31536000,
        },
        contentSecurityPolicy: {
            useDefaults: false,
            directives: {
                "default-src": ["'none'"],
                "frame-ancestors": ["'none'"],
            },
        },
        frameguard: {
            action: "deny",
        },
    })
);

app.use((req, res, next) => {
    res.contentType("application/json; charset=utf-8");
    next();
});
app.use(nocache());

app.use(
    cors({
        origin: CLIENT_ORIGIN_URL,
        methods: ["GET"],
        allowedHeaders: ["Authorization", "Content-Type"],
        maxAge: 86400,
    })
);

app.use("/api", apiRouter);
apiRouter.use("/messages", messagesRouter);

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
