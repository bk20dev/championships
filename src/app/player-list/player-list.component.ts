import { Component, OnInit } from '@angular/core';
import { Player } from 'src/domain/Player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements OnInit {
  players: Player[] = [];

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerService
      .getAllPlayers()
      .subscribe((players) => (this.players = players));
  }
}
