import { RsvpEntry, RsvpStatus } from "../interfaces/RsvpEntry";
import { Player } from "../interfaces/Player";
import { Logger } from "../utils/Logger";

export class RsvpService {
  private entries: Map<string, RsvpEntry>;
  private logger: Logger;

  constructor(logger: Logger, initialEntries?: RsvpEntry[]) {
    this.entries = new Map();
    this.logger = logger;

    if (initialEntries) {
      for (const entry of initialEntries) {
        this.entries.set(entry.player.id, entry);
      }
    }
  }

  addOrUpdateRsvp(player: Player, status: RsvpStatus): void {
    const entry: RsvpEntry = { player, status };
    this.entries.set(player.id, entry);
    this.logger.log(`RSVP updated: ${player.name} → ${status}`);
  }

  getConfirmedAttendees(): Player[] {
    return Array.from(this.entries.values())
      .filter(entry => entry.status === "Yes")
      .map(entry => entry.player);
  }

  getRsvpCounts(): { total: number; confirmed: number; declined: number } {
    let confirmed = 0;
    let declined = 0;

    for (const entry of this.entries.values()) {
      if (entry.status === "Yes") confirmed++;
      else if (entry.status === "No") declined++;
    }

    return {
      total: this.entries.size,
      confirmed,
      declined,
    };
  }

  getAllEntries(): RsvpEntry[] {
    return Array.from(this.entries.values());
  }
}
