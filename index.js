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

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
  });
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.use(express.static(path.join(__dirname, "/app/build")));

if(process.env.NODE_ENV === 'production'){
      const path  =  require('path');
      app.get('/*',(req,res)=>{
          res.sendfile(path.resolve(__dirname,'app','build','index.html'))
      })
  }

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});