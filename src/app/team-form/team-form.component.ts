import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Team } from "../../domain/Team";

@Component({
  selector: "app-team-form",
  templateUrl: "./team-form.component.html",
  styleUrls: ["./team-form.component.scss"],
})
export class TeamFormComponent {
  readonly teamForm = new FormGroup({
    name: new FormControl("", [
      Validators.required, Validators.minLength(2),
    ]),
  });

  @Output()
  readonly teamChange = new EventEmitter<Omit<Team, "id">>();

  @Output()
  readonly valid = new EventEmitter<boolean>();

  @Input()
  set team(team: Omit<Team, "id">) {
    const { name } = team;
    this.teamForm.setValue({ name });
    this.valid.emit(this.teamForm.valid);
  }

  onChange(): void {
    const { valid, value } = this.teamForm;
    this.teamChange.emit(value as Omit<Team, "id">);
    this.valid.emit(valid);
  }
}
