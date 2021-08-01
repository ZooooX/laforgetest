import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import AuthConfig from "../config/Auth.config";
import UserService from "../services/User.service";

export default class AuthMiddleware {
    static verifyToken (req : Request, res : Response, next : NextFunction){
        console.log(req.headers);
        let authHeader : string | undefined = req.headers.authorization;
        const authConfig : AuthConfig = new AuthConfig();

        if(authHeader){
            const token : string = authHeader.split(' ')[1];

            if(!token){
                return res.status(403).send({message : "No token provided!"});
            }


            jwt.verify(token,authConfig.getPublicKey(), (err,decoded) => {
                if(err){
                    return res.status(401).send({message : "Unauthorized!"});
                }

                if(decoded){
                    req.userID = decoded.id;
                    next();
                }
            });
        }
        else{
            return res.status(401).send({message:'No auth header, please connect'});
        }


    }

    static checkEmptyFields (req : Request, res : Response, next : NextFunction){
        if(req.body.password == "" || req.body.email == ""  || req.body.password == undefined || req.body.email == undefined){
            return res.status(400).send({message : 'Some fields are empty'});
        }

        next();
    }


    static checkDuplicateEmail(req : Request, res : Response, next : NextFunction){
        const userService : UserService = new UserService();

        userService.findByEmail(req.body.email).then((user) => {
            if(user) {
                return res.status(400).send({message : 'Email already in use :('});
            }

            next();

        }).catch((err) => {
            return res.status(500).send({message : err});
        });
    }
}