# Test technique La Forge

Here is the result of my technical test for La Forge. Instructions in Test.md file.

Related Links :  
    - Api :  https://laforgetest.herokuapp.com  
    - Api doc : https://documenter.getpostman.com/view/12964212/Tzsfm4qh  
    - Source Code : https://github.com/ZooooX/laforgetest


How to run :

    Deployed api : Endpoints available in api doc.  

    Local :  
        - Download project or clone repository  

        - Configuration :
            - First create a RSA keypair with the keyPairGen.ts file located in config folder.  
            - You must format the private key and public key like so : "-----RSA PUBLIC KEY------\nyiezgifzuefiuzef\n-----END RSA PUBLIC KEY-----" (1 line, carriage return replaced by \n, line between quotes)  
            - Then create a .env file in the project, set variables DB_URI (database connection), PORT (application port)  
            - Then add the RSA keys as env variables PRIVATE_KEY and PUBLIC_KEY (jwt signging and verifying keys)  

        - Use :  
            - Start in dev mode : npm run dev  
            - Build : npm run build  
            - Start : npm run start  

            - Api endpoints in api doc, replace domain with localhost    