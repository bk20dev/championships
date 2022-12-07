import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Team, TeamPreview} from "../../../domain/Team";
import {TeamService} from "../team.service";

@Component({
  selector: "app-edit-team-form",
  templateUrl: "./edit-team-form.component.html",
  styleUrls: ["./edit-team-form.component.scss"],
})
export class EditTeamFormComponent implements OnInit {
  updatedTeam: Omit<TeamPreview, "id"> | undefined;
  originalTeam: Team | undefined;
  isValid = false;

  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    const teamId = params.get("teamId")!;

    this.teamService
      .getTeam(teamId)
      .subscribe(team => {
        this.originalTeam = team;
        this.updatedTeam = team;
      });
  }

  updateIsValid(isFormValid: boolean) {
    this.isValid = isFormValid;
  }

  updateTeam(): void {
    if (this.updatedTeam && this.originalTeam) {
      const {players, id} = this.originalTeam
      this.teamService
        .updateTeam({...this.updatedTeam, players: players.map(it => it.id), id})
        .subscribe(async () => {
          await this.router.navigate(["teams", id]);
        });
    }
  }
}
