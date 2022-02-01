import { UserModel } from "../model/model.schema";
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

// export const uploadProduct = (req, res) => {
//   res.send({
//     bodyData: req.body,
//     fileData: req.file,
//   });
// };
