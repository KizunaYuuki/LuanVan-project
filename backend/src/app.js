import express from 'express'
const app = express()
app.use(express.json())

import { config } from 'dotenv'
config();

import { getNote, getNotes, createNote } from '../src/models/db.js'

const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/notes', async (req, res) => {
    const notes = await getNotes();
    res.send(notes)
})

app.get("/notes/:id", async (req, res) => {
    const id = req.params.id;
    const note = await getNote(id);
    res.send(note);
})

app.post("/notes", async (req, res) => {
    const { title, contents } = req.body;
    const note = await createNote(title, contents);
    res.status(201).send(note);
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})


app.listen(port, () => {
    console.log(`API Server listening on port ${port}`)
})


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




