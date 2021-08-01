import { Request, Response } from "express";
import PokemonService from "../services/Pokemon.service";

export default class PokemonController{

    static getFilteredPokemons(req : Request, res : Response){
        const pokemonService : PokemonService = new PokemonService();

        pokemonService.getWithCriterias(req.body.name, req.body.num, req.body.type).then((pokemons) => {
            res.status(200).send({data : pokemons});
        }).catch((err) => {
            console.log(`Error getting filtered pokemons :( ${err})`);
            res.status(500).send({message : err});
        });
    }
}