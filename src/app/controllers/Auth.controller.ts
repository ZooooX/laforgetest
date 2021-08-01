import {Request , Response} from 'express';
import UserService from '../services/User.service';
import Utils from '../utils/Utils';

export default class AuthController {
    static signup (req : Request, res : Response){
        const userService : UserService = new UserService();

        userService.create(req.body.email, req.body.password)
            .then((user) => {
                console.log(`User Created ${user}`);
                return res.status(200).send({
                    id : user._id,
                    email : user.email
                });
            }).catch((err)=>{
                console.log(`User creation failed ${err}`);
            });
    }

    static signin (req : Request, res : Response){
        const userService : UserService = new UserService();

        userService.findByEmail(req.body.email).then((user) => {
            if(!user){
                return res.status(404).send({message : "User not found"});
            }
    
            if(!Utils.comparePasswords(user.password,req.body.password)){
                return res.status(401).send({
                    accessToken : null,
                    message : "Invalid password !"
                });
            }
    
            let token : string = Utils.createJWT(user._id);
            console.log(`A user logged in : ${user.email}`);
    
            res.status(200).send({
                email : user.email,
                accessToken : token
            });
            
        }).catch((err) => {
            return res.status(500).send({message : err});
        });
    }
}