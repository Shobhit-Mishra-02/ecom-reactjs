import { UserModel, ProductModel, CartModel } from "../model/model.schema";
import jwt from "jsonwebtoken";
import multer from "multer";

const jwtCode = "whatareudoing";

/* 
this controller will add the user in the database.
it takes name, passwd, gender, email
*/
export const addingUser = async (req, res) => {
  const info = {
    name: req.body.name,
    passwd: req.body.passwd,
    gender: req.body.gender,
    email: req.body.email,
    admin: false,
  };
  const data = await UserModel.create(info);
  res.status(200).send(data);
};

/*
this controller is for login the user
and the user needs to give the valid email and passwd to crak the validation.

This will return user details and a token(jwt)
*/
export const userLogin = async (req, res) => {
  const dataFromDB = await UserModel.findOne(req.body).exec();

  if (dataFromDB) {
    const tempData = {
      name: dataFromDB.name,
      gender: dataFromDB.gender,
      passwd: dataFromDB.passwd,
      email: dataFromDB.email,
      admin: Boolean(dataFromDB.admin),
      id: dataFromDB._id,
    };

    const sendingData = {
      data: tempData,
      token: jwt.sign(tempData, jwtCode),
      validation: 1,
    };
    res.status(200).send(sendingData);
  } else {
    res.status(200).send({ validation: 0 });
  }
};

/*
this controller will take a token and give back the 
user information which is inside the token.
*/

export const convertingJwtToObj = (req, res) => {
  const token = req.params.token;
  const info = jwt.verify(token, jwtCode);
  res.status(200).send(info);
};

/*
this controller will give all the users which are in the database.
*/
export const getAllUsers = async (req, res) => {
  const allUsers = await UserModel.find({}).exec();
  res.send(allUsers);
};

/*
this controller is for uploading the products data like
product's name, price , description and category,
*/
export const uploadProduct = async (req, res) => {
  //req.file.filename : this is for the uploaded file name
  // req.body : this will hold the text content from the form

  const data = await ProductModel.create({
    productTitle: req.body.productTitle,
    productPrice: parseInt(req.body.productPrice),
    productDesc: req.body.productDesc,
    productImg: req.file.filename,
    productCategory: req.body.productCategory,
  });
  console.log(data);
  res.redirect("http://localhost:1234/admin/products");
};

/*
This will send all products to the user
*/
export const getAllProds = async (req, res) => {
  const data = await ProductModel.find({}, { __v: 0 }).exec();
  res.status(200).send({
    products: data,
  });
};

/*
This takes an product ID and gives back the whole product details
which is in the database.
*/
export const getProductById = async (req, res) => {
  const data = await ProductModel.findById(req.params.id);
  res.send(data);
};

/*
This takes the userID and productID , then 
put the product details in the user's database
*/
export const addToCart = async (req, res) => {
  const data = await CartModel.updateOne(
    { user: req.params.user },
    {
      $push: {
        cartProducts: req.params.product,
      },
    },
    { upsert: true }
  ).exec();

  res.send({
    user: req.params.user,
    product: req.params.product,
    data,
  });
};

export const getCartStatus = async (req, res) => {
  const data = await CartModel.findOne({ user: req.params.userID })
    .populate("cartProducts")
    .exec();

  res.send(data);
};
