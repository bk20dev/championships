import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Player } from "src/domain/Player";
import { environment } from "../../environments/environment";
import { DataResponse } from "../../api/api";

@Injectable({
  providedIn: "root",
})
export class PlayerService {
  private static readonly baseUrl = `${environment.apiUrl}/players`;

  constructor(private http: HttpClient) {
  }

  getAllPlayers(): Observable<Player[]> {
    return this.http
      .get<DataResponse<Player[]>>(PlayerService.baseUrl)
      .pipe(map(response => response.data));
  }

  getPlayer(id: string): Observable<Player | undefined> {
    const url = `${PlayerService.baseUrl}/${id}`;
    return this.http
      .get<DataResponse<Player | undefined>>(url)
      .pipe(map(response => response.data));
  }

  createPlayer(player: Omit<Player, "id">): Observable<Player> {
    return this.http
      .post<DataResponse<Player>>(PlayerService.baseUrl, player)
      .pipe(map(response => response.data));
  }

  updatePlayer(player: Player): Observable<Player> {
    const url = `${PlayerService.baseUrl}/${player.id}`;
    return this.http
      .put<DataResponse<Player>>(url, player)
      .pipe(map(response => response.data));
  }

  deletePlayer(id: string): Observable<Player | undefined> {
    const url = `${PlayerService.baseUrl}/${id}`;
    return this.http
      .delete<DataResponse<Player | undefined>>(url)
      .pipe(map(response => response.data));
  }
}
