import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Player} from "../../../domain/Player";
import {Category} from "../Category";

@Component({
  selector: 'app-player-picker',
  templateUrl: './player-picker.component.html',
  styleUrls: ['./player-picker.component.scss']
})
export class PlayerPickerComponent {

  playerDialogVisible = false;

  @Input()
  category?: Category;

  @Output()
  readonly players = new EventEmitter<Player[]>();

  get unselectedPlayers(): Player[] {
    if (!this.category) return [];
    const {availablePlayers, selectedPlayers} = this.category;
    return availablePlayers.filter(player => !selectedPlayers.includes(player));
  }

  get maximumPlayerCountReached(): boolean {
    if (!this.category) return true;
    const {selectedPlayers, maxPlayers} = this.category
    return selectedPlayers.length >= maxPlayers;
  }

  openDialog() {
    this.playerDialogVisible = true;
  }

  closeDialog() {
    this.playerDialogVisible = false;
  }

  deselectPlayer(playerId: string): void {
    if (!this.category) return;
    const updatedPlayers = this.category.selectedPlayers
      .filter(player => player.id != playerId);
    this.players.emit(updatedPlayers);
  }

  selectPlayer(player: Player): void {
    if (!this.category) return;

    const {selectedPlayers, maxPlayers} = this.category;
    const playerCount = selectedPlayers.length;

    if (playerCount >= maxPlayers - 1) {
      this.closeDialog();
    }

    if (playerCount < maxPlayers) {
      const updatedPlayers = [...selectedPlayers, player]
      this.players.emit(updatedPlayers);
    }
  }
}
