import {
  Comment01Icon,
  ChartLineData01Icon,
  CreditCardIcon,
  GlobeIcon,
  Shield02Icon as ShieldCheckIcon,
} from "hugeicons-react";
import React from "react";

type IndrapayHighlightIcon =
  | "fast-transfer"
  | "global-access"
  | "secure"
  | "support"
  | "analytics";

const Highlight: React.FC<{
  className?: string;
  title: string;
  icon: IndrapayHighlightIcon;
}> = ({ className = "", title, icon }) => {
  const _icon = () => {
    switch (icon) {
      case "fast-transfer":
        return <CreditCardIcon className="text-teal-600" size={20} />;
      case "global-access":
        return <GlobeIcon className="text-teal-500" size={20} />;
      case "secure":
        return <ShieldCheckIcon className="text-green-600" size={20} />;

      case "support":
        return <Comment01Icon className="text-purple-500" size={20} />;
      case "analytics":
        return <ChartLineData01Icon className="text-cyan-600" size={20} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`ml-3 text-xs leading-5 font-medium dark:text-sky-100 dark:bg-main-dark-variant bg-teal-100 w-fit rounded-full py-[0.4rem] px-[0.85rem] hidden xl:flex items-center bg-opacity-10 backdrop-blur-sm ${className}`}
    >
      {_icon()}
      <strong className="font-semibold ml-2">{title}</strong>
    </div>
  );
};

export default Highlight;
