import { Router } from "express";
import AuthController from "../controllers/Auth.controller";
import AuthMiddleware from "../middlewares/Auth.middleware";

export default class AuthRoutes {

    private router : Router;

    constructor(){
        this.router = Router();
        this.configureRoutes();
    }

    configureRoutes() {
        this.router.route('/signin').post(AuthController.signin);

        this.router.route('/signup').post(AuthMiddleware.checkEmptyFields,AuthMiddleware.checkDuplicateEmail,AuthController.signup);
    }

    getRouter() : Router{
        return this.router;
    }
}