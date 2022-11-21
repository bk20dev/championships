export interface Player {
  readonly id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  club: string;
  position: PlayerPosition;
}

export enum PlayerPosition {
  Keeper = "keeper",
  HalfBack = "half-back",
  Sweeper = "sweeper",
  Forward = "forward",
}
