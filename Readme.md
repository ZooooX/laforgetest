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

## Related Links:
   [Deployed Api](https://laforgetest.herokuapp.com)  
   [Api Doc](https://documenter.getpostman.com/view/12964212/Tzsfm4qh)  
   [Source Code](https://github.com/ZooooX/laforgetest)  
    
## How to run :  
   Deployed api : Endpoints available in api doc.  
    
   Local :  
   &emsp; - Download project or clone repository  
   &emsp; - Configuration :  
   &emsp;&emsp; - First create a RSA keypair with the keyPairGen.ts file located in config folder.  
   
   &emsp;&emsp; - You must format the private key and public key like so : "-----RSA PUBLIC KEY------\nyiezgifzuefiuzef\n-----END RSA PUBLIC KEY-----" (1 line, carriage return replaced by \n, line between quotes)  
   
   &emsp;&emsp; - Then create a .env file in the project, set variables DB_URI (database connection), PORT (application port)  
   
   &emsp;&emsp; - Then add the RSA keys as env variables PRIVATE_KEY and PUBLIC_KEY (jwt signging and verifying keys)  
   
   &emsp;&emsp; - Also, change the lines in Auth.config.ts to dev mode in config folder (Dev mode is for Heroku env variables to work)  
   
   &emsp; - Use :  
   &emsp;&emsp; - Start in dev mode : npm run dev  
   &emsp;&emsp; - Build : npm run build  
   &emsp;&emsp; - Start : npm run start  
   &emsp;&emsp; - Api endpoints in api doc, replace domain with localhost  
   &emsp;&emsp; - Manually tested with Postman but can be consumed by any front end   



