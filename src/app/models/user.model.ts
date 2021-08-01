import mongoose , { Schema, model} from "mongoose";

interface IUser {
    email : string,
    password : string,
    likedPokemons : string []
}

const userSchema = new Schema<IUser>({
    email : {type : String, required : true, unique: true},
    password : {type : String , required : true},
    likedPokemons : {type : [mongoose.Types.ObjectId], ref : "Pokemon"}
});

const User = model<IUser>("User",userSchema);

export default User;