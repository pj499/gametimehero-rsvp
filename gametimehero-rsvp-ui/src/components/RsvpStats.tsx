import React from "react";

type Props = {
  total: number;
  confirmed: number;
  declined: number;
};

export const RsvpStats: React.FC<Props> = ({ total, confirmed, declined }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex items-center gap-2 text-lg">
          📊 <span className="font-semibold text-gray-700">Total RSVPs:</span>
          <span className="font-bold text-blue-600">{total}</span>
        </div>
        <div className="flex items-center gap-2 text-lg">
          ✅ <span className="font-semibold text-gray-700">Confirmed:</span>
          <span className="font-bold text-green-600">{confirmed}</span>
        </div>
        <div className="flex items-center gap-2 text-lg">
          ❌ <span className="font-semibold text-gray-700">Declined:</span>
          <span className="font-bold text-red-600">{declined}</span>
        </div>
      </div>
    </div>
  );
};
