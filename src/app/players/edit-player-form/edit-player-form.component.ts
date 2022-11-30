import { Component, OnInit } from "@angular/core";
import { PlayerChangeEvent } from "../player-form/player-form.component";
import { PlayerService } from "../player.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Player } from "../../../domain/Player";

@Component({
  selector: "app-edit-player-form",
  templateUrl: "./edit-player-form.component.html",
  styleUrls: ["./edit-player-form.component.scss"],
})
export class EditPlayerFormComponent implements OnInit {
  originalPlayer: Player | undefined;
  updatedPlayer: Omit<Player, "id"> | undefined;
  isPlayerLoaded = false;
  isValid = false;

  constructor(private playerService: PlayerService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    const playerId = params.get("playerId");
    if (!playerId) return;
    this.playerService
      .getPlayer(playerId)
      .subscribe(player => {
        this.originalPlayer = player;
        this.isPlayerLoaded = true;
      });
  }

  onPlayerChange(event: PlayerChangeEvent): void {
    this.isValid = event.valid;
    this.updatedPlayer = event.player;
  }

  updatePlayer(): void {
    if (!this.originalPlayer) return;
    if (!this.updatedPlayer) return;

    const id = this.originalPlayer.id;
    const pendingUpdate: Player = { ...this.updatedPlayer, id };
    this.playerService
      .updatePlayer(pendingUpdate)
      .subscribe(async () => {
        await this.router.navigate(["players", id]);
      });
  }
}
