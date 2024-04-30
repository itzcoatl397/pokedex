
import {Schema, SchemaFactory,Prop} from '@nestjs/mongoose'
import { Document } from "mongoose";

@Schema()
export class Pokemon extends Document {

    // son las reglas

@Prop({
    unique:true,
    index:true

})
    name:string;
@Prop({
    unique:true,
    index:true,
    isInteger:true

})
    no:number;
}


export const PokemonSchema = SchemaFactory.createForClass(Pokemon)