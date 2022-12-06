import {Component} from "@angular/core";
import {TeamPreview} from "../../../domain/Team";
import {TeamService} from "../team.service";
import {Router} from "@angular/router";

@Component({
  selector: "app-new-team-form",
  templateUrl: "./new-team-form.component.html",
  styleUrls: ["./new-team-form.component.scss"],
})
export class NewTeamFormComponent {
  newTeam: Omit<TeamPreview, "id"> = {name: ""};
  isValid = false;

  constructor(
    private teamService: TeamService,
    private router: Router) {
  }

  updateIsValid(isFormValid: boolean): void {
    this.isValid = isFormValid;
  }

  createTeam(): void {
    this.teamService
      .createTeam(this.newTeam)
      .subscribe(async (team) => {
        await this.router.navigate(["teams", team.id]);
      });
  }
}
