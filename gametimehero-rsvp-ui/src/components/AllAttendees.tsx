import React from "react";
import { RsvpEntry, RsvpStatus } from "../interfaces/RsvpEntry";

type Props = {
  entries: RsvpEntry[];
  onStatusChange: (playerId: string, status: RsvpStatus) => void;
};

export const AllAttendees: React.FC<Props> = ({ entries, onStatusChange }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="font-semibold mb-3">🧾 All Attendees</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b">
            <th className="py-1">Name</th>
            <th className="py-1">Status</th>
            <th className="py-1">Update</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(({ player, status }) => (
           <tr key={player.id} className="hover:bg-gray-50 transition">
           <td className="py-2 px-2 font-medium">{player.name}</td>
           <td className="py-2 px-2">{status}</td>
           <td className="py-2 px-2">
             <select
               value={status}
               onChange={(e) =>
                 onStatusChange(player.id, e.target.value as RsvpStatus)
               }
               className="border border-gray-300 rounded px-2 py-1 bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
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
