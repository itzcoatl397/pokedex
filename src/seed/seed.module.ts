import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PokemonModule } from 'src/pokemon/pokemon.module';
import { PokemonService } from 'src/pokemon/pokemon.service';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports:[PokemonModule],

})
export class SeedModule {}
