import { Component } from "@angular/core";
import { Team } from "../../domain/Team";
import { TeamChangeEvent } from "../team-form/team-form.component";
import { TeamService } from "../team.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-team-form",
  templateUrl: "./new-team-form.component.html",
  styleUrls: ["./new-team-form.component.scss"],
})
export class NewTeamFormComponent {
  isValid = false;
  team!: Omit<Team, "id">;

  constructor(
    private teamService: TeamService,
    private router: Router) {
  }

  onTeamChange(event: TeamChangeEvent): void {
    this.isValid = event.valid;
    this.team = event.team;
  }

  createTeam(): void {
    this.teamService
      .createTeam(this.team)
      .subscribe(async (team) => {
        await this.router.navigate(["teams", team.id]);
      });
  }
}
