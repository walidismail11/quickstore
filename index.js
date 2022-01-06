const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./rootes/user");
const authRoute = require("./rootes/auth");
const productRoute = require("./rootes/product");
const cartRoute = require("./rootes/cart");
const orderRoute = require("./rootes/order");
const stripeRoute = require("./rootes/stripe");
const path = require("path")
const cors = require("cors");
global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;
const whitelist = ["https://quickstoreapp.herokuapp.com"]
dotenv.config();

mongoose
mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://quickshop:quickshop154@cluster0.j4onu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewurlParser: true,
  useUnifiedTopology: true
  })
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.use(express.static(path.join(__dirname, "/app/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/app/build', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});