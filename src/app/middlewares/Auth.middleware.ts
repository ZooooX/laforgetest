import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import AuthConfig from "../config/Auth.config";
import UserService from "../services/User.service";

export default class AuthMiddleware {

    //Verify the JWT
    static verifyToken (req : Request, res : Response, next : NextFunction){
        let authHeader : string | undefined = req.headers.authorization;
        const authConfig : AuthConfig = new AuthConfig();
        
        //check if header in request
        if(authHeader){
            const token : string = authHeader.split(' ')[1];
            //check if token in header
            if(!token){
                return res.status(403).send({message : "No token provided!"});
            }

            //verify token with public key
            jwt.verify(token,authConfig.getPublicKey(), (err,decoded) => {
                if(err){
                    return res.status(401).send({message : "Unauthorized!"});
                }

                if(decoded){

                    //check if decoded userid correspond to an actual user
                    const userService : UserService = new UserService();
                    userService.findById(decoded.id).then((user) => {
                        if(user){
                            //attach user id to request object for a further use
                            req.userID = decoded.id;
                            next();
                        }else{
                            return res.status(400).send({message : "User doesn't exist"});
                        }
                    }).catch((err) => {
                        return res.status(401).send({message : err})
                    });
                }
            });
        }
        else{
            return res.status(401).send({message:'No auth header, please connect'});
        }


    }

    static checkEmptyFields (req : Request, res : Response, next : NextFunction){
        if(req.body.password == "" || req.body.email == ""  || req.body.password == undefined || req.body.email == undefined){
            return res.status(400).send({message : 'Some fields are empty :('});
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