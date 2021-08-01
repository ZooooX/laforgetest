import { Request, Response } from "express";
import PokemonService from "../services/Pokemon.service";
import UserService from "../services/User.service";

export default class CommonController {

    static pokemonIsLikedByUser(req : Request, res : Response){
        const userService : UserService = new UserService();
        const pokemonService : PokemonService = new PokemonService();

        userService.addLikedPokemon(req.body.pokemonID , req.userID!).then((user) => {
            pokemonService.addUserThatLikesMe(req.body.pokemonID , req.userID!).then((pokemon) => {
                if(pokemon){
                    console.log(`Pokemon successfully liked ! ${pokemon}`);
                    return res.status(200).send(`${pokemon.name} successfully liked ! `);
                }
                else{
                    console.log('Pokemon doesnt exists ! ')
                    return res.status(400).send({message : `Pokemon doesnt exists ! `});
                }
            }).catch((err) => {
                console.log(`Error liking the pokemon ! ${err}`);
                return res.status(500).send({message : err});
            });

        }).catch((err) => {
            console.log(`Error liking the pokemon ! ${err}`);
            return res.status(500).send({message : err});
        });
    }

    static pokemonIsUnlikedByUser(req : Request, res : Response){
        const userService : UserService = new UserService();
        const pokemonService : PokemonService = new PokemonService();

        userService.removeLikedPokemon(req.body.pokemonID , req.userID!).then((user) => {
            pokemonService.removeUserThatLikesMe(req.body.pokemonID , req.userID!).then((pokemon) => {
                if(pokemon){
                    console.log(`Pokemon successfully unliked ! ${pokemon}`);
                    return res.status(200).send(`${pokemon.name} successfully unliked ! `);
                }
                else{
                    console.log('Pokemon doesnt exists ! ')
                    return res.status(400).send({message : `Pokemon doesnt exists ! `});
                }
            }).catch((err) => {
                console.log(`Error unliking the pokemon ! ${err}`);
                return res.status(500).send({message : err});
            });

        }).catch((err) => {
            console.log(`Error unliking the pokemon ! ${err}`);
            return res.status(500).send({message : err});
        });
    }
    
}