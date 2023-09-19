// Su dung CommonJS để import, export (Node.js)
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const helmet = require("helmet");
const nocache = require("nocache");
const { messagesRouter } = require("./messages/messages.router");
const { usersRouter } = require("./routes/users.router.js");
const { statusRouter } = require("./routes/status.router.js");
const { cartsRouter } = require("./routes/carts.router.js");
const { errorHandler } = require("./middleware/error.middleware");
const { notFoundHandler } = require("./middleware/not-found.middleware");
const { getNote, getNotes, createNote } = require("./models/db");

const fs = require('fs');
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

app.get('/', cors(), (req, res) => {
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

// Thông tin về tỉnh vùng miền của Việt Nam để tính giá dịch vụ theo bảng giá của nhà cung cấp
app.get("/address", async (req, res) => {
    fs.readFile('./src/public/VietNameAddress.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Lỗi khi đọc file JSON:', err);
            return;
        }

        // Nếu không có lỗi, data chứa nội dung của tệp JSON dưới dạng chuỗi.
        try {
            const jsonObject = JSON.parse(data);
            console.log('Đối tượng JSON:', jsonObject);
            res.status(201).send(jsonObject);
        } catch (parseError) {
            console.error('Lỗi khi phân tích nội dung JSON:', parseError);
        }
    });
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.use("/api", apiRouter);
apiRouter.use("/messages", messagesRouter);
apiRouter.use("/user", usersRouter);
apiRouter.use("/status", statusRouter);
apiRouter.use("/cart", cartsRouter);

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => {
    console.log(`API Server listening on port  ${PORT}`);
});
