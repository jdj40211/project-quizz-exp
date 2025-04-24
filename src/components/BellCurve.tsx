import React from 'react';

interface BellCurveProps {
  percentile: number;
}

const BellCurve: React.FC<BellCurveProps> = ({ percentile }) => {
  // Position marker based on percentile
  // For a bell curve, we need to convert percentile to a position
  // This is simplified - in a real implementation you'd use proper statistics
  const markerPosition = 5 + (percentile / 100) * 90; // 5% to 95% of the width
  
  return (
    <div className="relative h-40 w-full">
      {/* The bell curve */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          d="M5,80 C20,80 25,10 50,10 C75,10 80,80 95,80"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
      </svg>
      
      {/* Marker for user's position */}
      <div 
        className="absolute bottom-0 -translate-x-1/2"
        style={{ left: `${markerPosition}%` }}
      >
        <div className="bg-black text-white text-xs py-1 px-2 rounded mb-1">
          Top {percentile}%
        </div>
        <div className="w-4 h-4 rounded-full bg-blue-600 border-2 border-white"></div>
      </div>
    </div>
  );
};

export default BellCurve;