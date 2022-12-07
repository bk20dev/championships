import {Player} from "./Player";

export interface TeamPreview {
  readonly id: string;
  name: string;
}

export interface Team extends TeamPreview {
  players: Player[]
}

export interface TeamUpdate extends TeamPreview {
  players: string[]
}
