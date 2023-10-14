// Su dung CommonJS để import, export (Node.js)
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const helmet = require("helmet");
const nocache = require("nocache");
const { messagesRouter } = require("./messages/messages.router");
const { usersRouter } = require("./routes/users.router.js");
const { providersRouter } = require("./routes/providers.router.js");
const { serviceTypesRouter } = require("./routes/serviceTypes.router.js");
const { servicesRouter } = require("./routes/services.router.js");
const { priceListsRouter } = require("./routes/priceLists.router.js");
const { statusRouter } = require("./routes/status.router.js");
const { paymentsRouter } = require("./routes/payments.router.js");
const { ordersRouter } = require("./routes/orders.router.js");
const { addressRouter } = require("./routes/address.router.js");
const { packagesRouter } = require("./routes/packages.router.js");
const { reviewsRouter } = require("./routes/reviews.router.js");
const { cartsRouter } = require("./routes/carts.router.js");
const { promotionsRouter } = require("./routes/promotions.router.js");
const { locationsRouter } = require("./routes/locations.router.js");
const axios = require('axios');

// child_process to run python
const { spawn } = require('child_process');

const { errorHandler } = require("./middleware/error.middleware");
const { notFoundHandler } = require("./middleware/not-found.middleware");

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

// !important
app.use(
    cors({
        origin: CLIENT_ORIGIN_URL,
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Authorization", "Content-Type"],
        maxAge: 86400,
    })
);

app.get('/', cors(), (req, res) => {
    res.send('Hello World!')
})


const { getServiceById } = require("../src/controllers/services.controller.js");

app.get('/related-product', cors(), (req, res) => {
    // spawn new child process to call the python script
    const python = spawn('python3', ['./src/python/RelatedProduct.py', req.query.provider, req.query.service_type, req.query.weight]);

    python.stdout.on('data', async function (data) {
        console.log('Pipe data from python script ...');
        console.log(data.toString());
        if (data.toString() !== 'False\n') {
            const result = await getServiceById(data.toString());
            res.status(200).json(result);
        } else {
            res.json(data.toString())
        }
    });

    python.stderr.on('data', function (data) {
        console.log('Pipe data from python script ...');
        // console.error(data.toString());
        res.send(data.toString())
    });

    python.on('exit', (code) => {
        if (code === 0) {
            console.log('Tiến trình con Python kết thúc thành công');
        } else {
            console.error('Tiến trình con Python kết thúc với mã lỗi ' + code);
        }
    });

    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        res.send()
    });
});


// Lấy dữ liệu chuyển đổi USD/VND từ Google Finance 
app.get('/google-finance', async (req, res) => {
    const { data } = await axios.get('https://www.google.com/finance/quote/USD-VND?hl=vi');
    res.send(data);
});

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
apiRouter.use("/provider", providersRouter);
apiRouter.use("/service-type", serviceTypesRouter);
apiRouter.use("/service", servicesRouter);
apiRouter.use("/price-list", priceListsRouter);
apiRouter.use("/status", statusRouter);
apiRouter.use("/payment", paymentsRouter);
apiRouter.use("/order", ordersRouter);
apiRouter.use("/address", addressRouter);
apiRouter.use("/package", packagesRouter);
apiRouter.use("/review", reviewsRouter);
apiRouter.use("/cart", cartsRouter);
apiRouter.use("/promotion", promotionsRouter);
apiRouter.use("/location", locationsRouter);

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => {
    console.log(`API Server listening on port  ${PORT}`);
});
