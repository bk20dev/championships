import { Component, OnInit } from "@angular/core";
import { Team } from "../../../domain/Team";
import { TeamService } from "../team.service";

@Component({
  selector: "app-team-list",
  templateUrl: "./team-list.component.html",
  styleUrls: ["./team-list.component.scss"],
})
export class TeamListComponent implements OnInit {
  teams: Team[] = [];

  constructor(private teamService: TeamService) {
  }

  ngOnInit(): void {
    this.teamService
      .getAllTeams()
      .subscribe((teams) => (this.teams = teams));
  }
}
