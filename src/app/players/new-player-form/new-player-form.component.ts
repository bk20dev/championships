import { Component } from "@angular/core";
import { PlayerService } from "../player.service";
import { Router } from "@angular/router";
import { PlayerChangeEvent } from "../player-form/player-form.component";
import { Player } from "../../../domain/Player";

@Component({
  selector: "app-new-player-form",
  templateUrl: "./new-player-form.component.html",
  styleUrls: ["./new-player-form.component.scss"],
})
export class NewPlayerFormComponent {
  isValid = false;
  player!: Omit<Player, "id">;

  constructor(private playerService: PlayerService, private router: Router) {
  }

  onPlayerChange(event: PlayerChangeEvent): void {
    this.isValid = event.valid;
    this.player = event.player;
  }

  createPlayer() {
    this.playerService
      .createPlayer(this.player)
      .subscribe(async (player) => {
        await this.router.navigate(["players", player.id]);
      });
  }
}
