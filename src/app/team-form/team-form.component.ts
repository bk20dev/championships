import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Team } from "../../domain/Team";

export interface TeamChangeEvent {
  valid: boolean,
  team: Omit<Team, "id">
}

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
  readonly teamChange = new EventEmitter<TeamChangeEvent>();

  @Input()
  set team(team: Omit<Team, "id">) {
    const { name } = team;
    this.teamForm.setValue({ name });
    this.onChange();
  }

  onChange(): void {
    const { valid, value } = this.teamForm;
    const event: TeamChangeEvent = {
      valid, team: value as Omit<Team, "id">,
    };
    this.teamChange.emit(event);
  }
}
