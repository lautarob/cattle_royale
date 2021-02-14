import { Entity } from "./entity";

interface Result {
  entity: Entity;
  matchups: number;
  winRate: number;
  eloScore?: number;
}

export default Result;