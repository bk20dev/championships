import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { oneOf } from "../../api/validator";
import { Player } from "../../domain/Player";

export interface PlayerChangeEvent {
  valid: boolean,
  player: Omit<Player, "id">
}

@Component({
  selector: "app-player-form",
  templateUrl: "./player-form.component.html",
  styleUrls: ["./player-form.component.scss"],
})
export class PlayerFormComponent implements OnInit {
  @Output()
  readonly playerChange = new EventEmitter<PlayerChangeEvent>();

  readonly playerPositions = ["keeper", "half-back", "sweeper", "forward"];

  readonly playerForm = new FormGroup({
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

  constructor() {
  }

  @Input()
  set player(player: Omit<Player, "id">) {
    const { firstName, lastName, dateOfBirth, club, position } = player;
    const playerValue = { firstName, lastName, dateOfBirth, club, position };
    this.playerForm.setValue(playerValue);
    this.onChange();
  }

  ngOnInit(): void {
  }

  onChange(): void {
    const { valid, value } = this.playerForm;
    const event: PlayerChangeEvent = {
      valid, player: value as Omit<Player, "id">,
    };
    this.playerChange.emit(event);
  }
}
