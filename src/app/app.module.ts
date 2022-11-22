import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { PlayerListComponent } from "./player-list/player-list.component";
import { AgePipe } from "./age.pipe";
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { NewPlayerFormComponent } from './new-player-form/new-player-form.component';

@NgModule({
  declarations: [
    AgePipe, AppComponent, PlayerListComponent, NavigationComponent, PlayerDetailsComponent, NewPlayerFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
