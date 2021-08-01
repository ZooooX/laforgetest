import User from "../models/user.model";
import Utils from "../utils/Utils";

export default class UserService {

    create(email : string , password : string){
        const user = new User({
            email : email,
            password : Utils.hashPassword(password)
        });

        return user.save();
    }
    
    findByEmail(email : string){
        return User.findOne({email : email}).exec();
    }

    addLikedPokemon(pokemonID : string , userID : string){
        return User.findOneAndUpdate({_id : userID} , {$push : {likedPokemons : pokemonID}}).exec();
    }

    removeLikedPokemon(pokemonID : string , userID : string){
        return User.findOneAndUpdate({_id : userID} , {$pull : {likedPokemons : pokemonID}}).exec();
    }

    getLikedPokemons(userID : string){
        return User.findById(userID).populate('likedPokemons').select('likedPokemons').exec();
    }
}