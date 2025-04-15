import React from "react";
import { Player } from "../interfaces/Player";

type Props = {
  attendees: Player[];
};

export const ConfirmedList: React.FC<Props> = ({ attendees }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="font-semibold mb-2">✅ Confirmed Attendees</h2>
      {attendees.length > 0 ? (
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {attendees.map((p) => (
            <li key={p.id}>{p.name}</li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500">No confirmed RSVPs yet.</p>
      )}
    </div>
  );
};
