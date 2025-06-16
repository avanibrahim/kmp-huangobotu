
import React from "react";
import { File, Globe, Clock } from "lucide-react";

interface Props {
  icon: "file" | "globe" | "clock";
  title: string;
  color?: string;
}

const ICONS = {
  file: <File className="w-8 h-8 text-red-700" />,
  globe: <Globe className="w-8 h-8 text-green-700" />,
  clock: <Clock className="w-8 h-8 text-yellow-700" />,
};

const CARD_COLORS = {
  file: "border-red-200 bg-white",
  globe: "border-green-200 bg-white",
  clock: "border-yellow-200 bg-white"
};

const PPIDCategoryCard: React.FC<Props> = ({ icon, title, color }) => (
  <div
    className={`flex flex-col items-center justify-center gap-3 px-4 py-7 sm:py-8 min-h-[140px] sm:min-h-[150px] rounded-xl border ${CARD_COLORS[icon]} shadow hover:shadow-lg transition-shadow duration-200 cursor-pointer hover-scale`}
    style={color ? { borderColor: color } : undefined}
    tabIndex={0}
    aria-label={title}
  >
    <div aria-hidden>{ICONS[icon]}</div>
    <div className="font-semibold text-base text-gray-700 text-center">{title}</div>
  </div>
);

export default PPIDCategoryCard;
