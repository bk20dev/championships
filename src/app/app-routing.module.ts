import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlayerListComponent } from "./player-list/player-list.component";
import { PlayerDetailsComponent } from "./player-details/player-details.component";
import { NewPlayerFormComponent } from "./new-player-form/new-player-form.component";
import { EditPlayerFormComponent } from "./edit-player-form/edit-player-form.component";
import { TeamListComponent } from "./team-list/team-list.component";
import { TeamDetailsComponent } from "./team-details/team-details.component";

const routes: Routes = [
  { path: "", redirectTo: "/players", pathMatch: "full" },
  { path: "players", component: PlayerListComponent },
  { path: "players/new", component: NewPlayerFormComponent },
  { path: "players/:playerId", component: PlayerDetailsComponent },
  { path: "players/:playerId/edit", component: EditPlayerFormComponent },
  { path: "teams", component: TeamListComponent },
  { path: "teams/:teamId", component: TeamDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
