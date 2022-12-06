import {Component, EventEmitter, Input, Output} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TeamPreview} from "../../../domain/Team";

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
  readonly teamChange = new EventEmitter<Omit<TeamPreview, "id">>();

  @Output()
  readonly valid = new EventEmitter<boolean>();

  @Input()
  set team(team: Omit<TeamPreview, "id">) {
    const {name} = team;
    this.teamForm.setValue({name});
    this.valid.emit(this.teamForm.valid);
  }

  onChange(): void {
    const {valid, value} = this.teamForm;
    this.teamChange.emit(value as { name: string });
    this.valid.emit(valid);
  }
}
