import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { oneOf } from "../../api/validator";
import { Player } from "../../domain/Player";

@Component({
  selector: "app-player-form",
  templateUrl: "./player-form.component.html",
  styleUrls: ["./player-form.component.scss"],
})
export class PlayerFormComponent {
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

  @Output()
  resultPlayer = new EventEmitter<Omit<Player, "id">>();

  @Input()
  set player(player: Player | undefined) {
    if (player) {
      this.initializeForm(player);
    }
  }

  onSubmit() {
    if (this.playerForm.valid) {
      const result = this.playerForm.value as Omit<Player, "id">;
      this.resultPlayer.emit(result);
    }
  }

  private initializeForm(player: Player) {
    const { firstName, lastName, dateOfBirth, club, position } = player;
    const value = { firstName, lastName, dateOfBirth, club, position };
    this.playerForm.setValue(value);
  }
}
