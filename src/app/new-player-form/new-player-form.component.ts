import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { oneOf } from "../../api/validator";

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

  onSubmit(): void {

  }
}
