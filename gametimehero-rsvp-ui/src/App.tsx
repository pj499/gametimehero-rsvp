import React, { useState } from "react";
import { RsvpService } from "./services/RsvpService";
import { Logger } from "./utils/Logger";
import { Player } from "./interfaces/Player";
import { RsvpStatus } from "./interfaces/RsvpEntry";
import { RsvpForm } from "./components/RsvpForm";

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

        <div className="bg-white shadow-md rounded p-4 text-sm text-gray-800 space-y-1">
          <p>📊 <span className="font-semibold">Total RSVPs:</span> {counts.total}</p>
          <p>✅ <span className="font-semibold">Confirmed:</span> {counts.confirmed}</p>
          <p>❌ <span className="font-semibold">Declined:</span> {counts.declined}</p>
        </div>

        <div className="bg-white shadow-md rounded p-4">
          <h2 className="font-semibold mb-2">✅ Confirmed Attendees</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {confirmed.length > 0 ? (
              confirmed.map((p) => <li key={p.id}>{p.name}</li>)
            ) : (
              <p className="text-sm text-gray-500">No confirmed RSVPs yet.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}


export default App
