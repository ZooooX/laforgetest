import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import AuthConfig from "../config/Auth.config";

export default class Utils {


    static hashPassword(password : string){
        return bcrypt.hashSync(password,8);
    }

    static comparePasswords(hashedPassword : string , password : string){
        return bcrypt.compareSync(password, hashedPassword);
    }

    /* Create JWT with userID in payload, RSA private key as secret */
    static createJWT (userID : string){
        const authConfig : AuthConfig = new AuthConfig();

        const privateKey : string = authConfig.getPrivateKey();

        return jwt.sign({
            id : userID
        },
        privateKey,
        {
            algorithm : "RS256",
            expiresIn : "20s"
        });
    }
}