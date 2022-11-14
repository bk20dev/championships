export interface Player {
  readonly id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  profilePicture: string;
  position: PlayerPosition;
  originClub: string;
}

export enum PlayerPosition {
  Keeper = 'keeper',
  HalfBack = 'half-back',
  Sweeper = 'sweeper',
  Forward = 'forward',
}
