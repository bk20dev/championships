import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from 'src/domain/Player';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private static readonly baseUrl = `${environment.apiUrl}/players`;

  constructor(private http: HttpClient) {}

  getAllPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(PlayerService.baseUrl);
  }
}
