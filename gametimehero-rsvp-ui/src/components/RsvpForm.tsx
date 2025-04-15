import React, { useState } from "react";
import { Player } from "../interfaces/Player";
import { RsvpStatus } from "../interfaces/RsvpEntry";

type Props = {
  onSubmit: (player: Player, status: RsvpStatus) => void;
};

export const RsvpForm: React.FC<Props> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState<RsvpStatus | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !status) return;


    const newPlayer: Player = {
      id: name.trim().toLowerCase().replace(/\s+/g, "-") + "-" + Date.now(),
      name: name.trim(),
    };
    onSubmit(newPlayer, status);
    setName("");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
        ➕ <span>Add an Attendee</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          placeholder="Player name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
       <select
            value={status}
            onChange={(e) => setStatus(e.target.value as RsvpStatus)}
            className="curser-pointer border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
            <option value="" disabled hidden >Select RSVP Status</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Maybe">Maybe</option>
        </select>


        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded w-full transition duration-200"
          type="submit"
        >
          Submit RSVP
        </button>
      </form>
    </div>
  );
};
