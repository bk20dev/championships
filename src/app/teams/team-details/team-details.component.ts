import {Component, OnInit} from "@angular/core";
import {Team, TeamUpdate} from "../../../domain/Team";
import {TeamService} from "../team.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Player, PlayerPosition} from "../../../domain/Player";

interface Category {
  name: string;
  key: PlayerPosition;
  players: Player[];
  maxPlayers: number;
}

@Component({
  selector: "app-team-details",
  templateUrl: "./team-details.component.html",
  styleUrls: ["./team-details.component.scss"],
})
export class TeamDetailsComponent implements OnInit {
  team: Team | undefined;

  readonly categories: Category[] = [
    {
      name: "Forwards",
      key: PlayerPosition.Forward,
      players: [],
      maxPlayers: 3,
    },
    {
      name: "Sweepers",
      key: PlayerPosition.Sweeper,
      players: [],
      maxPlayers: 3,
    },
    {
      name: "Half-backs",
      key: PlayerPosition.HalfBack,
      players: [],
      maxPlayers: 3,
    },
    {
      name: "Keepers",
      key: PlayerPosition.Keeper,
      players: [],
      maxPlayers: 1,
    }
  ]

  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  updatePlayers(category: Category, players: Player[]): void {
    if (!this.team) return;
    const playerIds = players.map(it => it.id)
    const teamUpdate: TeamUpdate = {...this.team, players: playerIds}
    this.teamService.updateTeam(teamUpdate).subscribe()
    category.players = players;
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
