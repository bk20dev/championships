import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Team } from "../../domain/Team";
import { TeamService } from "../team.service";

@Component({
  selector: "app-edit-team-form",
  templateUrl: "./edit-team-form.component.html",
  styleUrls: ["./edit-team-form.component.scss"],
})
export class EditTeamFormComponent implements OnInit {
  updatedTeam: Omit<Team, "id"> | undefined;
  teamId!: string;
  isValid = false;

  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    this.teamId = params.get("teamId")!;

    this.teamService
      .getTeam(this.teamId)
      .subscribe(team => {
        this.updatedTeam = team;
      });
  }

  updateIsValid(isFormValid: boolean) {
    this.isValid = isFormValid;
  }

  updateTeam(): void {
    if (this.updatedTeam) {
      this.teamService
        .updateTeam({ ...this.updatedTeam, id: this.teamId })
        .subscribe(async () => {
          await this.router.navigate(["teams", this.teamId]);
        });
    }
  }
}
