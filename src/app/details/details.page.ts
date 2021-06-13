import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoriteService } from '../services/favorite.service';
import { LoginService } from '../services/login.service';
import { MovesService } from '../services/moves.service';
import { PokedexService } from '../services/pokedex.service';
import { PokemonService } from '../services/pokemon.service';
import { EvoChain } from '../types/evoChain.type';
import { PokemonMove, Pokemon, PokemonAbility } from '../types/pokemon.type';

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
  public nameOfUser: string;
  public evoChain: EvoChain;

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.onLoad();
  }

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private favoriteService: FavoriteService,
    private pokedexService: PokedexService,
    private movesService: MovesService,
    private loginService: LoginService
  ) { }

  public async onLoad(): Promise<void> {
    await this.favoriteService.loadFromStorage();
    this.allFavoritePokemon = this.favoriteService.allFavoritePokemon;
    await this.checkFavorite();
    await this.getPokeEvoChain(this.id);
    this.nameOfUser = this.loginService.nameOfUser;
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
  }

  public async getPokeEvoChain(id: number): Promise<void> {
    this.evoChain = await this.pokemonService.getEvoChain(id);
  }

  public getImgUrl(url: string): string {
    return this.pokemonService.getImg(url);
  }

  public getPokeId(url: string): string {
    return this.pokemonService.getId(url);
  }
}