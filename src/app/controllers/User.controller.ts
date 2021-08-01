import { Request, Response } from "express";
import UserService from "../services/User.service";

export default class PokemonController{


    static getLikedPokemons(req : Request, res : Response){
        const userService : UserService = new UserService();

        userService.getLikedPokemons(req.userID!).then((pokemons) => {
            res.status(200).send({data : pokemons});
        }).catch((err) => {
            console.log(`Error getting liked pokemons :( ${err})`);
            res.status(500).send({message : err});
        });
    }

}