import {Player, PlayerPosition} from "../../domain/Player";

export interface Category {
  name: string;
  key: PlayerPosition;
  availablePlayers: Player[];
  selectedPlayers: Player[];
  maxPlayers: number;
}
