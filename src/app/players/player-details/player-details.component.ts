import { Component, OnInit } from "@angular/core";
import { PlayerService } from "../player.service";
import { Player } from "../../../domain/Player";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-player-details",
  templateUrl: "./player-details.component.html",
  styleUrls: ["./player-details.component.scss"],
})
export class PlayerDetailsComponent implements OnInit {
  player: Player | undefined;
  isPlayerLoaded = false;

  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    const playerId = params.get("playerId");
    if (!playerId) return;
    this.playerService
      .getPlayer(playerId)
      .subscribe(player => {
        this.player = player;
        this.isPlayerLoaded = true;
      });
  }

  deletePlayer(): void {
    if (!this.player) return;
    this.playerService
      .deletePlayer(this.player.id)
      .subscribe(() => {
        // noinspection JSIgnoredPromiseFromCall
        this.router.navigate(["players"]);
      });
  }
}
