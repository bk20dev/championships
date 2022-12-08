import {HttpClientModule} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {PlayerListComponent} from "./players/player-list/player-list.component";
import {AgePipe} from "./age.pipe";
import {PlayerDetailsComponent} from "./players/player-details/player-details.component";
import {NewPlayerFormComponent} from "./players/new-player-form/new-player-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EditPlayerFormComponent} from "./players/edit-player-form/edit-player-form.component";
import {PlayerFormComponent} from "./players/player-form/player-form.component";
import {TeamListComponent} from "./teams/team-list/team-list.component";
import {TeamDetailsComponent} from "./teams/team-details/team-details.component";
import {TeamFormComponent} from "./teams/team-form/team-form.component";
import {NewTeamFormComponent} from "./teams/new-team-form/new-team-form.component";
import {EditTeamFormComponent} from './teams/edit-team-form/edit-team-form.component';
import {PlayerPickerComponent} from './teams/player-picker/player-picker.component';
import {PlayerSearchComponent} from './teams/player-search/player-search.component';

@NgModule({
  declarations: [
    AgePipe, AppComponent, PlayerListComponent, NavigationComponent,
    PlayerDetailsComponent, NewPlayerFormComponent, EditPlayerFormComponent,
    PlayerFormComponent, TeamListComponent, TeamDetailsComponent,
    TeamFormComponent, NewTeamFormComponent, EditTeamFormComponent,
    PlayerPickerComponent, PlayerSearchComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
