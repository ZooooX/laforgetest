export default class AuthConfig {
    
    private privateKey : string | undefined;
    private publicKey : string | undefined;      
    
    constructor(){

        this.privateKey = process.env.PRIVATE_KEY;
        this.publicKey = process.env.PUBLIC_KEY;
    }

    getPrivateKey(){
        return this.privateKey;
    }

    getPublicKey(){
        return this.publicKey;
    }

}
