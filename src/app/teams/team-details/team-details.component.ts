import {Component, OnInit} from "@angular/core";
import {Team} from "../../../domain/Team";
import {TeamService} from "../team.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Player, PlayerPosition} from "../../../domain/Player";
import {PlayerService} from "../../players/player.service";
import {Category} from "../Category";

@Component({
  selector: "app-team-details",
  templateUrl: "./team-details.component.html",
  styleUrls: ["./team-details.component.scss"],
})
export class TeamDetailsComponent implements OnInit {

  team?: Team;
  players: Player[] = []

  readonly categories: Category[] = [
    {
      name: "Forwards",
      key: PlayerPosition.Forward,
      availablePlayers: [],
      selectedPlayers: [],
      maxPlayers: 3,
    },
    {
      name: "Sweepers",
      key: PlayerPosition.Sweeper,
      availablePlayers: [],
      selectedPlayers: [],
      maxPlayers: 3,
    },
    {
      name: "Half-backs",
      key: PlayerPosition.HalfBack,
      availablePlayers: [],
      selectedPlayers: [],
      maxPlayers: 3,
    },
    {
      name: "Keepers",
      key: PlayerPosition.Keeper,
      availablePlayers: [],
      selectedPlayers: [],
      maxPlayers: 1,
    }
  ]

  constructor(
    private teamService: TeamService,
    private playerService: PlayerService,
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

    this.playerService
      .getAllPlayers()
      .subscribe(players => {
        this.players = players
        this.updateAvailablePlayers(this.categories)
      })
  }

  updateForCategory(category: Category, selectedPlayers: Player[]): void {
    if (!this.team) return
    category.selectedPlayers = selectedPlayers;
    this.updateAvailablePlayers([category]);
    const playerIds = this.getSelectedPlayersIds();
    this.teamService.updateTeam({...this.team, players: playerIds})
  }

  updateAvailablePlayers(categories: Category[]): void {
    for (const category of categories) {
      category.availablePlayers = this.players
        .filter(player => player.position === category.key)
        .filter(player => !category.selectedPlayers.includes(player));
    }
  }

  getSelectedPlayersIds(): string[] {
    return this.categories.reduce<string[]>((acc, val) => {
      return [...acc, ...val.selectedPlayers.map(player => player.id)]
    }, [])
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
