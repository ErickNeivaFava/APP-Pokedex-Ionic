import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoriteService } from '../services/favorite.service';
import { MovesService } from '../services/moves.service';
import { PokedexService } from '../services/pokedex.service';
import { EvoChain } from '../types/evoChain.type';
import { PokemonMove, Pokemon, PokemonAbility } from '../types/pokemon.type';
import { PokeSpecies } from '../types/pokeSpecies.type';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public id: number;
  public allFavoritePokemon: Pokemon[];
  public isFavorite: boolean;
  public currentPokemon: Pokemon;

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.onLoad();
  }

  constructor(
    private route: ActivatedRoute,
    private favoriteService: FavoriteService,
    private pokedexService: PokedexService,
    private movesService: MovesService,
    private http: HttpClient
  ) {}

  public async onLoad(): Promise<void> {
    await this.favoriteService.loadFromStorage();
    this.allFavoritePokemon = this.favoriteService.allFavoritePokemon;
    await this.checkFavorite();
    this.getPokeEvoChain(this.id);
  }

  public favPokemon(): void {
    this.allFavoritePokemon = this.favoriteService.handleFav(
      this.currentPokemon
    );
    this.checkFavorite();
  }

  public async checkFavorite(): Promise<void> {
    await this.getPoke(this.id);
    this.isFavorite = this.favoriteService.checkFav(this.currentPokemon);
  }

  public showPokeAbilityDesc(currentAbility: PokemonAbility): void {
    this.movesService.getPokemonAbility(currentAbility);
  }

  public showPokeMoveDesc(pokemonMove: PokemonMove): void {
    this.movesService.getPokemonMove(pokemonMove);
  }

  public async getPoke(id: number): Promise<void> {
    const response = await this.pokedexService.P.getPokemonByName(id);
    this.currentPokemon = response;
    // console.log(response.species);
  }

  public async getPokeEvoChain(id: number): Promise<void> {
    const response = await this.pokedexService.P.getPokemonByName(id);

    let pokeSpecies = await this.http
      .get<PokeSpecies>(response.species.url)
      .toPromise();

    let evoChain = await this.http
      .get<EvoChain>(pokeSpecies.evolution_chain.url)
      .toPromise();

    console.log(evoChain); // objeto da chain

    console.log(
      evoChain.chain.species.name +
        ' Link para requisição: ' +
        evoChain.chain.species.url
    ); // primeiro

    evoChain.chain.evolves_to.forEach(async (element) => {
      console.log(
        element.species.name +
          ' => ' +
          element.evolution_details[0].trigger.name +
          '(' +
          element.evolution_details[0].item +
          ')' +
          ' Link para requisição: ' +
          element.species.url
      ); // evolução da primeira
      element.evolves_to.forEach((element2) => {
        console.log(
          element2.species.name +
            ' => ' +
            element2.evolution_details[0].trigger.name +
            '(' +
            element2.evolution_details[0].item +
            ')' +
            ' Link para requisição: ' +
            element2.species.url
        ); // evolução da segunda
      });
    });

    console.log(evoChain.chain.evolves_to.length); // tamanho da chain
  }
}
