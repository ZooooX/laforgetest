import { Application, Router, Request , Response } from "express";
import AuthRoutes from "./Auth.routes";
import PokemonRoutes from "./Pokemon.routes";
import UserRoutes from "./User.routes";

export default class ApiRoutes {

    private app : Application;

    constructor(app : Application){
        this.app = app;
        this.configureRoutes();
    }

    configureRoutes() {
        const router : Router = Router();
        const authRoutes : AuthRoutes = new AuthRoutes();
        const pokemonRoutes : PokemonRoutes = new PokemonRoutes();
        const userRoutes : UserRoutes = new UserRoutes();

        router.use("/auth", authRoutes.getRouter());
        router.use("/pokemon", pokemonRoutes.getRouter());
        router.use("/user", userRoutes.getRouter());

        this.app.use('/api',router);

        this.app.use('/',(req : Request, res : Response) => {
            return res.send("Pokemon Api - La Forge Test | Find endpoints at https://documenter.getpostman.com/view/12964212/Tzsfm4qh");
        });
    }
}