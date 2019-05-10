import { Team } from './Team.model';

export interface League {
  id: number,
  name: String,
  teams: Team[]
}
