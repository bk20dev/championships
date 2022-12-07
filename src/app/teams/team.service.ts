import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {DataResponse} from "../../api/api";
import {Team, TeamPreview, TeamUpdate} from "../../domain/Team";

@Injectable({
  providedIn: "root",
})
export class TeamService {
  private static readonly baseUrl = `${environment.apiUrl}/teams`;

  constructor(private http: HttpClient) {
  }

  getAllTeams(): Observable<TeamPreview[]> {
    return this.http
      .get<DataResponse<TeamPreview[]>>(TeamService.baseUrl)
      .pipe(map(response => response.data));
  }

  getTeam(id: string): Observable<Team | undefined> {
    const url = `${TeamService.baseUrl}/${id}`;
    return this.http
      .get<DataResponse<Team | undefined>>(url)
      .pipe(map(response => response.data));
  }

  createTeam(team: Omit<TeamUpdate | TeamPreview, "id">): Observable<Team> {
    return this.http
      .post<DataResponse<Team>>(TeamService.baseUrl, team)
      .pipe(map(response => response.data));
  }

  updateTeam(team: TeamUpdate): Observable<Team> {
    const url = `${TeamService.baseUrl}/${team.id}`;
    return this.http
      .put<DataResponse<Team>>(url, team)
      .pipe(map(response => response.data));
  }

  deleteTeam(id: string): Observable<Team | undefined> {
    const url = `${TeamService.baseUrl}/${id}`;
    return this.http
      .delete<DataResponse<Team>>(url)
      .pipe(map(response => response.data));
  }
}
