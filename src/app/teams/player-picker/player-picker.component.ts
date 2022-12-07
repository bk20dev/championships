import {Component, EventEmitter, Input, Output} from '@angular/core';
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

  @Output()
  readonly playersChange = new EventEmitter<Player[]>()

  @Input()
  maxPlayers: number = 0;

  constructor() {
  }

  addPlayer(): void {
    if (this.players.length >= this.maxPlayers) return;
    // TODO:
  }

  deletePlayer(id: string): void {
    const filteredPlayers = this.players.filter(it => it.id !== id);
    this.playersChange.emit(filteredPlayers)
  }
}
