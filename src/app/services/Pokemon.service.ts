import Pokemon from "../models/pokemon.model";

export default class PokemonService {

    getById(pokemonID : string){
        return Pokemon.findById(pokemonID).exec();
    }

    getAll(){
        return Pokemon.find().exec();
    }

    addUserThatLikesMe(pokemonID : string ,userID : string){
        return Pokemon.findOneAndUpdate({_id : pokemonID}, {$push : {likedBy : userID}}).exec();
    }

    removeUserThatLikesMe(pokemonID : string ,userID : string){
        return Pokemon.findOneAndUpdate({_id : pokemonID}, {$pull : {likedBy : userID}}).exec();
    }

    getWithCriterias(name : string, num : string, type : string){
        //build query if filters
        let filter : any = {};

        if(name) {
            let regex = new RegExp(`^${name}`,"i");
            filter["name"] = regex;
        }

        if(num) filter["num"] = num;

        if(type){
            let regex = new RegExp(`^${type}`,"i");
            filter["types"] = regex;

        }
        return Pokemon.find(filter).exec();
    }
}