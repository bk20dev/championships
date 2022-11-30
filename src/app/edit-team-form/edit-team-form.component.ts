import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Team } from "../../domain/Team";
import { TeamService } from "../team.service";
import { TeamChangeEvent } from "../team-form/team-form.component";

@Component({
  selector: "app-edit-team-form",
  templateUrl: "./edit-team-form.component.html",
  styleUrls: ["./edit-team-form.component.scss"],
})
export class EditTeamFormComponent implements OnInit {
  originalTeam: Team | undefined;
  updatedTeam: Omit<Team, "id"> | undefined;
  isTeamLoaded = true;
  isValid = false;

  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    const playerId = params.get("teamId");
    if (!playerId) return;
    this.teamService
      .getTeam(playerId)
      .subscribe(team => {
        this.originalTeam = team;
        this.isTeamLoaded = true;
      });
  }

  onTeamChange(event: TeamChangeEvent): void {
    this.isValid = event.valid;
    this.updatedTeam = event.team;
  }

  updateTeam(): void {
    if (!this.originalTeam) return;
    if (!this.updatedTeam) return;

    const id = this.originalTeam.id;
    const pendingUpdate = { ...this.updatedTeam, id };
    this.teamService
      .updateTeam(pendingUpdate)
      .subscribe(async () => {
        await this.router.navigate(["teams", id]);
      });
  }
}
