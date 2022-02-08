import { Router } from "express";
import { addingUser, convertingJwtToObj } from "./controllers";
import {
  userLogin,
  getAllUsers,
  uploadProduct,
  getAllProds,
  getProductById,
  addToCart,
  getCartStatus,
  addToOrder,
  getOrders,
  doSearch,
  removeProdFromCart,
} from "./controllers";

import multer from "multer";

const router = Router();

// for adding users
router.route("/adduser").put(addingUser);

// sending jsonwebtoken
router.route("/login").put(userLogin);

//converting jwt to real info
router.route("/getjwt/:token").get(convertingJwtToObj);

//get all users
router.route("/allusers").get(getAllUsers);

// this is the storage for the uploaded image
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../upload/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

//uploading product
router.route("/uploadProd").post(upload.single("avatar"), uploadProduct);

//for getting all products
router.route("/getallprod").get(getAllProds);

//get product by ID
router.route("/getproduct/:id").get(getProductById);

//to update the cart database with productID and userID
router.route("/addToCart/:product/:user").get(addToCart);

//to get the cart products of a particular user with the userID
router.route("/getCartInfo/:userID").get(getCartStatus);

//to remove the product from the cart list
router.route("/removeFromCart/:productID/:userID").get(removeProdFromCart);

//to update the order database with productID and userID
router.route("/addToOrder/:productID/:userID").get(addToOrder);

//to get the ordered products of a particular user with the userID
router.route("/getOrder/:userID").get(getOrders);

//to do a search
router.route("/search").post(doSearch);

export default router;
