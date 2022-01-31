import { Router } from "express";
import { addingUser, convertingJwtToObj } from "./controllers";
import { userLogin, getAllUsers } from "./controllers";

const router = Router();

// for adding users
router.route("/adduser").put(addingUser);

// sending jsonwebtoken
router.route("/login").put(userLogin);

//converting jwt to real info
router.route("/getjwt/:token").get(convertingJwtToObj);

//get all users
router.route("/allusers").get(getAllUsers);

export default router;
