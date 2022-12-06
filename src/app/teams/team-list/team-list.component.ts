import {Component, OnInit} from "@angular/core";
import {TeamPreview} from "../../../domain/Team";
import {TeamService} from "../team.service";

@Component({
  selector: "app-team-list",
  templateUrl: "./team-list.component.html",
  styleUrls: ["./team-list.component.scss"],
})
export class TeamListComponent implements OnInit {
  teams: TeamPreview[] = [];

  constructor(private teamService: TeamService) {
  }

  ngOnInit(): void {
    this.teamService
      .getAllTeams()
      .subscribe((teams) => (this.teams = teams));
  }
}
