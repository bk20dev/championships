import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Player } from "src/domain/Player";
import { environment } from "../environments/environment";
import { DataResponse } from "../api/api";

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
}
