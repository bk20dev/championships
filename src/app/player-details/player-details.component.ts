import { Component, OnInit } from "@angular/core";
import { PlayerService } from "../player.service";
import { Player } from "../../domain/Player";
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { oneOf } from "../../api/validator";

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
    firstName: new FormControl("", [
      Validators.required, Validators.minLength(2),
    ]),
    lastName: new FormControl("", [
      Validators.required, Validators.minLength(2),
    ]),
    dateOfBirth: new FormControl("", Validators.required),
    club: new FormControl("", Validators.required),
    position: new FormControl(this.playerPositions[0], [
      Validators.required, oneOf(this.playerPositions),
    ]),
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
