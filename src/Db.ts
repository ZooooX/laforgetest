import mongoose from "mongoose";
import Pokemon from "./app/models/pokemon.model";

export default class Db {
    private uri : string;

    constructor(uri : string){
        this.uri = uri;
    }

    connect(){
        mongoose.connect(this.uri, {useNewUrlParser: true, useUnifiedTopology: true})
            .then(()=> {
                console.log("Successfully connected to the database !");
                this.initDB();
            })
            .catch((err) => {
                console.log("Error connecting to the database ! ", err)
                process.exit();
            });
    }

    private initDB(){
        Pokemon.countDocuments((err,count) => {
            if(!err && count === 0 ){
                let pokemons = require("../pokemons.json");

                pokemons.forEach( (pokemon : any) => {
                    let pokemonToCreate = new Pokemon({
                        name : pokemon.name,
                        num : pokemon.id,
                        types : pokemon.type,
                        imageLink : pokemon.img,
                        likedBy : []
                    });

                    pokemonToCreate.save().then((pokemon) => {
                        console.log(`Successfully created pokemon !`);
                    })
                    .catch((err) => {
                        console.log(`Error ${err}`);
                    })
                });
            }
        });
    }
}