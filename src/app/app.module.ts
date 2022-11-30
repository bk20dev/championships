import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { PlayerListComponent } from "./player-list/player-list.component";
import { AgePipe } from "./age.pipe";
import { PlayerDetailsComponent } from "./player-details/player-details.component";
import { NewPlayerFormComponent } from "./new-player-form/new-player-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { EditPlayerFormComponent } from "./edit-player-form/edit-player-form.component";
import { PlayerFormComponent } from "./player-form/player-form.component";
import { TeamListComponent } from "./team-list/team-list.component";
import { TeamDetailsComponent } from "./team-details/team-details.component";
import { TeamFormComponent } from "./team-form/team-form.component";
import { NewTeamFormComponent } from "./new-team-form/new-team-form.component";
import { EditTeamFormComponent } from './edit-team-form/edit-team-form.component';

@NgModule({
  declarations: [
    AgePipe, AppComponent, PlayerListComponent, NavigationComponent,
    PlayerDetailsComponent, NewPlayerFormComponent, EditPlayerFormComponent,
    PlayerFormComponent, TeamListComponent, TeamDetailsComponent,
    TeamFormComponent, NewTeamFormComponent, EditTeamFormComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
