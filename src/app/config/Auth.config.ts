import fs from "fs";
import path from "path";

export default class AuthConfig {
    
    private privateKey : string;
    private publicKey : string;
    
    constructor(){
        const pathToPrivateKey = path.join(__dirname, '/keys/id_rsa_priv.pem');
        const pathToPublicKey = path.join(__dirname, '/keys/id_rsa_pub.pem');

        this.privateKey = fs.readFileSync(pathToPrivateKey,"utf8");
        this.publicKey = fs.readFileSync(pathToPublicKey,"utf8");
    }

    getPrivateKey() : string{
        return this.privateKey;
    }

    getPublicKey() : string {
        return this.publicKey;
    }

}
