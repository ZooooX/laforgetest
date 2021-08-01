export default class AuthConfig {
    
    private privateKey : string | undefined;
    private publicKey : string | undefined;      
    
    constructor(){

        this.privateKey = process.env.PRIVATE_KEY;
        this.publicKey = process.env.PUBLIC_KEY;
    }

    getPrivateKey() : string {
        return this.privateKey!;
    }

    getPublicKey() : string{
        return this.publicKey!;
    }
}
