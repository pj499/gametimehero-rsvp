import React from "react";
import { RsvpEntry, RsvpStatus } from "../interfaces/RsvpEntry";

type Props = {
  entries: RsvpEntry[];
  onStatusChange: (playerId: string, status: RsvpStatus) => void;
};

export const AllAttendees: React.FC<Props> = ({ entries, onStatusChange }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-lg font-semibold text-slate-700 mb-4 flex items-center gap-2">
        🧾 All Attendees
      </h2>

      <table className="w-full table-fixed text-sm border-separate border-spacing-y-1">
        <thead>
          <tr className="text-left border-b">
            <th className="py-2 px-2 w-1/3 font-semibold text-gray-600">Name</th>
            <th className="py-2 px-2 w-1/3 font-semibold text-gray-600">Status</th>
            <th className="py-2 px-2 w-1/3 font-semibold text-gray-600">Update RSVP</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(({ player, status }) => (
            <tr key={player.id} className="hover:bg-slate-50 transition rounded">
              <td className="py-2 px-2 w-1/3 font-medium">{player.name}</td>
              <td className="py-2 px-2 w-1/3">{status}</td>
              <td className="py-2 px-2 w-1/3">
                <select
                  value={status}
                  onChange={(e) =>
                    onStatusChange(player.id, e.target.value as RsvpStatus)
                  }
                  className="cursor-pointer border border-gray-300 rounded px-2 py-1 w-full bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Maybe">Maybe</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
