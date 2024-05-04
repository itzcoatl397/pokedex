import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokemonResponse } from './interface/pokemon-response.interface';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';

@Injectable()
export class SeedService {

   axios:AxiosInstance = axios;

   constructor(  @InjectModel(Pokemon.name)
   private readonly pokemonModel: Model<Pokemon>){}

  

  async executeSeed() {

    

    const results = await this.axios.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon?limit=650')


    const pokemonToInsert:{name:string,no:number} []=[]

    results.data.results.forEach(async ({name,url}) =>{


      const  segments = url.split('/')

      const no:number = +segments[segments.length - 2]

        //const response = await this.pokemonModel.create({name,no})
     
        pokemonToInsert.push({name,no})
    })

    await this.pokemonModel.insertMany(pokemonToInsert)


    return 
  }

  
}
