import {Component, OnInit} from "@angular/core";
import {Team} from "../../../domain/Team";
import {TeamService} from "../team.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: "app-team-details",
  templateUrl: "./team-details.component.html",
  styleUrls: ["./team-details.component.scss"],
})
export class TeamDetailsComponent implements OnInit {
  team: Team | undefined;

  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    const teamId = params.get("teamId");
    if (!teamId) return;

    this.teamService
      .getTeam(teamId)
      .subscribe(team => {
        this.team = team;
      });
  }

  deleteTeam(): void {
    if (!this.team) return;

    this.teamService
      .deleteTeam(this.team.id)
      .subscribe(() => {
        // noinspection JSIgnoredPromiseFromCall
        this.router.navigate(["teams"]);
      });
  }
}
