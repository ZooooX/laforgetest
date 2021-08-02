# Test technique La Forge

Here is the result of my technical test for La Forge. Instructions in Test.md file.

**Technologies**
- Nodejs
- Express
- Mongoose
- TypeScript

**What you can do :**
A user can get pokemon data, filter the search with name, num and type fields.  
A user can Sign up with email and password, then sign in.
A JWT is then used to get access to protected data.  
A connected user can like or unlike pokemons and then get his liked pokemons.
## Related Links :  
    - Api :  https://laforgetest.herokuapp.com  
    - Api doc : https://documenter.getpostman.com/view/12964212/Tzsfm4qh  
    - Source Code : https://github.com/ZooooX/laforgetest  
    
## How to run :  
    Deployed api : Endpoints available in api doc.  
    
    Local :  
    
        - Download project or clone repository  
        - Configuration :
            - First create a RSA keypair with the keyPairGen.ts file located in config folder.  
            - You must format the private key and public key like so : "-----RSA PUBLIC KEY------\nyiezgifzuefiuzef\n-----END RSA PUBLIC KEY-----" (1 line, carriage return replaced by \n, line between quotes)  
            - Then create a .env file in the project, set variables DB_URI (database connection), PORT (application port)  
            - Then add the RSA keys as env variables PRIVATE_KEY and PUBLIC_KEY (jwt signging and verifying keys)
            - Also, change the lines in Auth.config.ts to dev mode in config folder

        - Use :  
            - Start in dev mode : npm run dev  
            - Build : npm run build  
            - Start : npm run start  
            - Api endpoints in api doc, replace domain with localhost

        - Manually tested with Postman    



