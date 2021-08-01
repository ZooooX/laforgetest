import { Router } from "express";
import UserController from "../controllers/User.controller";
import AuthMiddleware from "../middlewares/Auth.middleware";

export default class UserRoutes {

    private router : Router;

    constructor(){
        this.router = Router();
        this.configureRoutes();
    }

    configureRoutes() {
        this.router.route('/likedPokemons').get(AuthMiddleware.verifyToken, UserController.getLikedPokemons);
    }

    getRouter() : Router {
        return this.router;
    }
}