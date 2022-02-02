import { Router } from "express";
import { addingUser, convertingJwtToObj } from "./controllers";
import {
  userLogin,
  getAllUsers,
  uploadProduct,
  getAllProds,
  getProductById,
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

export default router;
