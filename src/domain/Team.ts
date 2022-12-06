import {Player} from "./Player";

export interface Team {
  readonly id: string;
  name: string;
  players: Player[];
}

export type TeamPreview = Omit<Team, "players">;
