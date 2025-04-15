import React from "react";

type Props = {
  total: number;
  confirmed: number;
  declined: number;
};

export const RsvpStats: React.FC<Props> = ({ total, confirmed, declined }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 text-sm text-gray-800 space-y-1">
      <p>📊 <span className="font-semibold">Total RSVPs:</span> {total}</p>
      <p>✅ <span className="font-semibold">Confirmed:</span> {confirmed}</p>
      <p>❌ <span className="font-semibold">Declined:</span> {declined}</p>
    </div>
  );
};
