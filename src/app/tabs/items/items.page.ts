import { Component, OnInit } from '@angular/core';

interface Item {
  id: number;
  src: string;
  name: string;
  description: string;
  class: 'potion' | 'pokeball' | 'food' | 'incubator' | 'raid pass';
}

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  public currentFilter: string;

  public updateFilter() {
    if (this.currentFilter && this.currentFilter.trim() !== '') {
      this.filteredItems = this.items.filter(item => item.name.includes(this.currentFilter.trim().toLowerCase()));
    }
    else {
      this.filteredItems = this.items;
    }
  }

  public items: Item[] = [
    { id: 1, src: 'https://cdn.bulbagarden.net/upload/thumb/2/2e/GO_Potion.png/200px-GO_Potion.png', description: 'Recupera 20 HP', class: 'potion', name: 'small potion' },
    { id: 2, src: 'https://img.rankedboost.com/wp-content/uploads/2016/08/Super-Potion-Pokemon-Go.png', description: 'Recupera 50 HP', class: 'potion', name: 'medium potion' },
    { id: 3, src: 'https://pokestop.cz/wp-content/uploads/2019/11/Hyper-Potion.png', description: 'Recupera 200 HP', class: 'potion', name: 'big potion' },
    { id: 4, src: 'https://e-lexia.com/pokemon-go/img/objeto-pocion-maxima-pokemon-go.png', description: 'Recupera HP máximo', class: 'potion', name: 'hyper potion' },
    { id: 5, src: 'https://www.pngkit.com/png/full/23-232103_pokeball-clipart-tiny-gif-pokeball.png', description: 'Uma Pokebola comum entre os jogadores novatos que enfrentam pequenos pokemons', class: 'pokeball', name: 'poké ball' },
    { id: 6, src: 'https://www.pngkit.com/png/full/441-4417026_not-too-perfect-but-basic-enough-to-catch.png', description: 'Pokebola intermediária usada por jogadores amadores que enfrentam medios e pequenos pokemons', class: 'pokeball', name: 'great ball' },
    { id: 7, src: 'https://pngimage.net/wp-content/uploads/2018/06/ultra-ball-png-1.png', description: 'Usada por jogadores profissionais, principalmente em torneios para capturar Pokémon de grandes níveis', class: 'pokeball', name: 'ultra ball' },
    { id: 8, src: 'https://th.bing.com/th/id/R056adeeb8ee0ad9b2bc93eb61602ca42?rik=nnTIQiyBeIWkLw&riu=http%3a%2f%2fqtoptens.com%2fwp-content%2fuploads%2f2017%2f09%2fmasterball.png&ehk=9kBEQjYIaSz4diyYT16qYCBDog6c5gNpabzutqdow68%3d&risl=&pid=ImgRaw', description: 'Usada para capturar todos tipos de pokémons, comum até o legendário com efetividade total', class: 'pokeball', name: 'master ball' },
    { id: 9, src: 'https://static.wikia.nocookie.net/pokemongo/images/d/db/Razz_Berry.png', description: 'Alimentando um Pokémon aumenta a chance de sucesso em 1,5 vezes em captura-lo', class: 'food', name: 'razz berry' },
    { id: 10, src: 'https://static.wikia.nocookie.net/pokemongo/images/4/44/Silver_Pinap_Berry.png', description: 'É usado para alimentar pokemons da raça pedra', class: 'food', name: 'silver pinap berry' },
    { id: 11, src: 'https://static.wikia.nocookie.net/pokemongo/images/f/f6/Unconfirmed_Item_Bluk_Berry.png', description: 'Alimenta Pokémons de alto niveis e aumenta a chance de sucesso em 4,5 vezes em captura-lo', class: 'food', name: 'bluk berry' },
    { id: 12, src: 'https://static.wikia.nocookie.net/pokemongo/images/d/de/Unconfirmed_Item_Wepear_Berry.png', description: 'Alimento usado para curar feridas', class: 'food', name: 'wepear Berry' },
    { id: 13, src: 'https://static.wikia.nocookie.net/pokemongo/images/b/b5/Golden_Razz_Berry.png', description: 'Alimenta Pokémons de alto niveis e aumenta a chance de sucesso em 3,5 vezes em captura-lo', class: 'food', name: 'golden razz berry' },
    { id: 14, src: 'https://static.wikia.nocookie.net/pokemongo/images/8/82/Nanab_Berry.png', description: 'Algumas raças de Pokemons gostam mais deste tipo de alimento, os tornando mais dóceis', class: 'food', name: 'nanab berry' },
    { id: 15, src: 'https://static.wikia.nocookie.net/pokemongo/images/d/d1/Pinap_Berry.png', description: 'Alimenta Pokémons de alto niveis e aumenta a chance de sucesso em 2,5 vezes em captura-lo', class: 'food', name: 'pinap berry' },
    { id: 16, src: 'https://static.wikia.nocookie.net/pokemongo/images/a/a4/Incubator_Unlimited.png', description: 'É usado em grande parte em Pokemons comuns de pequenos e médios tamanho', class: 'incubator', name: 'comum egg incubator' },
    { id: 17, src: 'https://static.wikia.nocookie.net/pokemongo/images/d/db/Incubator_Limited.png', description: 'É usado para incubar Pokemons grandes ou especificos', class: 'incubator', name: 'avanced egg incubator' },
    { id: 18, src: 'https://static.wikia.nocookie.net/pokemongo/images/d/d5/Super_Incubator.png', description: 'É usado pra incubar pokemons raros e delicados', class: 'incubator', name: 'super egg incubator' },
    { id: 19, src: 'https://static.wikia.nocookie.net/pokemongo/images/e/ef/Raid_Pass.png', description: 'É usado para chamar atenção de Pokemons comuns para captura-los', class: 'raid pass', name: 'raid pass' },
    { id: 20, src: 'https://static.wikia.nocookie.net/pokemongo/images/8/87/Premium_Battle_Pass.png', description: 'É usado para chamar atenção de Pokemons incomuns', class: 'raid pass', name: 'premium battle pass' },
    { id: 21, src: 'https://static.wikia.nocookie.net/pokemongo/images/1/13/Remote_Raid_Pass.png', description: 'É usado para chamar atenção em um raio enorme de Pokemons nos arredores', class: 'raid pass', name: 'remote raid pass' },
    { id: 22, src: 'https://static.wikia.nocookie.net/pokemongo/images/1/16/EX_Raid_Pass.png', description: 'Pokemons lendarios são invocados', class: 'raid pass', name: 'ex raid pass' },
  ]

  public filteredItems: Item[] = this.items;

  constructor() { }

  ngOnInit() {
  }

}
