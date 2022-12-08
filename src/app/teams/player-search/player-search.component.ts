import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Player} from "../../../domain/Player";

@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.component.html',
  styleUrls: ['./player-search.component.scss']
})
export class PlayerSearchComponent {

  @Input()
  players: Player[] = [];

  @Output()
  readonly select = new EventEmitter<Player>();

  searchPhrase: string = "";

  constructor() {
  }

  matchesSearchPhrase(player: Player): boolean {
    const {firstName, lastName, club} = player;
    const candidates = [firstName, lastName, club];
    const searchPhrase = this.searchPhrase.toLowerCase();
    return candidates.some(it => it.toLowerCase().includes(searchPhrase))
  }
}
