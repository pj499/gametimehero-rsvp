import  { useState } from "react";
import { RsvpService } from "./services/RsvpService";
import { Logger } from "./utils/Logger";
import { RsvpForm } from "./components/RsvpForm";
import { RsvpStats } from "./components/RsvpStats";
import { ConfirmedList } from "./components/ConfirmedList";
import { AllAttendees } from "./components/AllAttendees";
import { RsvpEntry, RsvpStatus } from "./interfaces/RsvpEntry";
import { Player } from "./interfaces/Player";

const initialRsvps: RsvpEntry[] = [
  { player: { id: "1", name: "Alex" }, status: "Yes" },
  { player: { id: "2", name: "Jordan" }, status: "No" },
  { player: { id: "3", name: "Riley" }, status: "Maybe" },
];

const logger = new Logger();
const rsvpService = new RsvpService(logger, initialRsvps);

function App() {
  const [, forceUpdate] = useState(false);
  const updateUI = () => forceUpdate((prev) => !prev);

  const handleRsvp = (player: Player, status: RsvpStatus) => {
    rsvpService.addOrUpdateRsvp(player, status);
    updateUI();
  };

  const handleStatusChange = (playerId: string, newStatus: RsvpStatus) => {
    const entry = rsvpService.getAllEntries().find((e) => e.player.id === playerId);
    if (entry) {
      rsvpService.addOrUpdateRsvp(entry.player, newStatus);
      updateUI();
    }
  };

  const allEntries = rsvpService.getAllEntries();
  const confirmed = rsvpService.getConfirmedAttendees();
  const counts = rsvpService.getRsvpCounts();

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4 sm:px-6 lg:px-8 text-gray-800">
      
  <div className="max-w-7xl mx-auto">
    <h1 className="text-4xl font-extrabold text-center text-blue-700 flex items-center justify-center gap-3 mb-10">
   🎟️ RSVP Manager
    </h1>
  
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        <div className="space-y-6">
          <section className="bg-white p-6 rounded-xl shadow-sm">
            <RsvpForm onSubmit={handleRsvp} />
          </section>
          <section className="bg-white p-6 rounded-xl shadow-sm">
            <AllAttendees entries={allEntries} onStatusChange={handleStatusChange} />
          </section>
        </div>
  

        <div className="space-y-6">
          <RsvpStats {...counts} />
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <ConfirmedList attendees={confirmed} />
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default App;
