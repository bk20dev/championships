import {Component, Input} from '@angular/core';
import {Player} from "../../../domain/Player";

@Component({
  selector: 'app-player-picker',
  templateUrl: './player-picker.component.html',
  styleUrls: ['./player-picker.component.scss']
})
export class PlayerPickerComponent {

  @Input()
  category: string = "";

  @Input()
  players: Player[] = [];

  @Input()
  maxPlayers: number = 0;

  constructor() {
  }

  addPlayer(): void {

  }

  deletePlayer(id: string): void {

  }
}
