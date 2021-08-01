import mongoose , { Schema, model} from "mongoose";

interface IPokemon {
    name : string,
    num : string,
    types : string [],
    imageLink : string,
    likedBy : string []
}

const pokemonSchema = new Schema<IPokemon>({
    name : {type : String, required : true},
    num : {type : String, required : true},
    types : {type : [String] , required : true},
    imageLink : {type : String, required : true},
    likedBy : {type : [mongoose.Types.ObjectId], required : true, ref : "User"}
});

const Pokemon = model<IPokemon>("Pokemon",pokemonSchema);

export default Pokemon;