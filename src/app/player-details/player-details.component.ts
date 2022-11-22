import { Component, OnInit } from "@angular/core";
import { PlayerService } from "../player.service";
import { Player } from "../../domain/Player";
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-player-details",
  templateUrl: "./player-details.component.html",
  styleUrls: ["./player-details.component.scss"],
})
export class PlayerDetailsComponent implements OnInit {
  player: Player | undefined;
  isDataLoaded = false;

  readonly playerPositions = ["keeper", "half-back", "sweeper", "forward"];

  playerForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    dateOfBirth: new FormControl(""),
    club: new FormControl(""),
    position: new FormControl(this.playerPositions[0]),
  });

  constructor(private playerService: PlayerService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    const playerId = params.get("playerId");
    if (playerId === null) {
      return;
    }
    this.playerService
      .getPlayer(playerId)
      .subscribe(player => {
        this.player = player;
        this.isDataLoaded = true;
      });
  }
}
