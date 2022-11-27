import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { DataResponse } from "../api/api";
import { Team } from "../domain/Team";

@Injectable({
  providedIn: "root",
})
export class TeamService {
  private static readonly baseUrl = `${environment.apiUrl}/teams`;

  constructor(private http: HttpClient) {
  }

  getAllTeams(): Observable<Team[]> {
    return this.http
      .get<DataResponse<Team[]>>(TeamService.baseUrl)
      .pipe(map(response => response.data));
  }

  getTeam(id: string): Observable<Team | undefined> {
    const url = `${TeamService.baseUrl}/${id}`;
    return this.http
      .get<DataResponse<Team | undefined>>(url)
      .pipe(map(response => response.data));
  }
}
