
import React from "react";

interface HorizontalSliderProps {
  children: React.ReactNode;
}

const HorizontalSlider: React.FC<HorizontalSliderProps> = ({ children }) => (
  <div className="overflow-x-auto">
    <div className="flex items-center space-x-4 md:space-x-6 min-w-max pb-2">
      {children}
    </div>
  </div>
);

export default HorizontalSlider;
