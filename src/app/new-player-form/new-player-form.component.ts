import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { oneOf } from "../../api/validator";
import { PlayerService } from "../player.service";
import { Player } from "../../domain/Player";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-player-form",
  templateUrl: "./new-player-form.component.html",
  styleUrls: ["./new-player-form.component.scss"],
})
export class NewPlayerFormComponent {
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

  constructor(private playerService: PlayerService, private router: Router) {
  }

  onSubmit(): void {
    if (this.playerForm.valid) {
      const player = this.playerForm.value as Omit<Player, "id">;
      this.playerService
        .createPlayer(player)
        .subscribe((player) => {
          // noinspection JSIgnoredPromiseFromCall
          this.router.navigate(["players", player.id]);
        });
    }
  }
}
