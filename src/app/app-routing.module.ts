import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlayerListComponent } from "./player-list/player-list.component";

const routes: Routes = [
  { path: "", redirectTo: "/players", pathMatch: "full" },
  { path: "players", component: PlayerListComponent },
  { path: "players/:id", component: PlayerListComponent }, // TODO: Create PlayerDetails component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
