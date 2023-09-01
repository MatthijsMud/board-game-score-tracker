import Dexie, { type Table } from "dexie";

import type { Player } from "../schema/Player";
import type { Game } from "../schema/Game";
import type { Session } from "../schema/Session";

export class Database extends Dexie {

  players!: Table<Player, number>;
  games!: Table<Game, number>;
  sessions!: Table<Session, number>;

  constructor() {
    super("bgst");
    this.version(1).stores({
      players: "++id, name",
      games: "++id, name",
      sessions: "++sessionid, gameId, *playerIds",
    });
  }
}
