import { Router } from "express";
import PokemonController from "../controllers/Pokemon.controller";
import CommonController from "../controllers/Common.controller";
import AuthMiddleware from "../middlewares/Auth.middleware";

export default class PokemonRoutes {

    private router : Router;

    constructor(){
        this.router = Router();
        this.configureRoutes();
    }

    configureRoutes() {
        this.router.route('/').get(PokemonController.getFilteredPokemons);
        this.router.route('/like').post(AuthMiddleware.verifyToken ,CommonController.pokemonIsLikedByUser);
        this.router.route('/unlike').post(AuthMiddleware.verifyToken ,CommonController.pokemonIsUnlikedByUser);
    }

    getRouter() : Router {
        return this.router;
    }
}