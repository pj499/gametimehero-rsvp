import React, { useState } from "react";
import { RsvpService } from "./services/RsvpService";
import { Logger } from "./utils/Logger";
import { Player } from "./interfaces/Player";
import { RsvpStatus } from "./interfaces/RsvpEntry";
import { RsvpForm } from "./components/RsvpForm";
import { RsvpStats } from "./components/RsvpStats";
import { ConfirmedList } from "./components/ConfirmedList";

const logger = new Logger();
const rsvpService = new RsvpService(logger);

function App() {
  const [, setForceUpdate] = useState(false);
  const handleRsvp = (player: Player, status: RsvpStatus) => {
    rsvpService.addOrUpdateRsvp(player, status);
    setForceUpdate((prev) => !prev);
  };

  const confirmed = rsvpService.getConfirmedAttendees();
  const counts = rsvpService.getRsvpCounts();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-lg mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-800">
          🎟️ RSVP Manager
        </h1>
        <RsvpForm onSubmit={handleRsvp} />
        <RsvpStats
          total={counts.total}
          confirmed={counts.confirmed}
          declined={counts.declined}
        />
        <ConfirmedList attendees={confirmed} />
      </div>
    </div>
  );
}


export default App
