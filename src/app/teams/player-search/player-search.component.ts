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

  constructor() {
  }
}
