import { FC, ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

type ColorScheme =
  | "cyan"
  | "indigo"
  | "pink"
  | "red"
  | "orange"
  | "yellow"
  | "emerald"
  | "teal";

type SVGParam = ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>
>;

interface LinkProps {
  href: string;
  name: string;
  icon: SVGParam;
  colorScheme: ColorScheme;
}

const colorSchemes: Record<
  ColorScheme,
  Record<"background" | "hover" | "icon", string>
> = {
  cyan: {
    background: "bg-cyan-500",
    hover: "group-hover:bg-cyan-600",
    icon: "text-cyan-200",
  },
  indigo: {
    background: "bg-indigo-500",
    hover: "group-hover:bg-indigo-600",
    icon: "text-indigo-200",
  },
  pink: {
    background: "bg-pink-500",
    hover: "group-hover:bg-pink-600",
    icon: "text-pink-200",
  },
  red: {
    background: "bg-red-500",
    hover: "group-hover:bg-red-600",
    icon: "text-red-200",
  },
  orange: {
    background: "bg-orange-500",
    hover: "group-hover:bg-orange-600",
    icon: "text-orange-200",
  },
  yellow: {
    background: "bg-yellow-500",
    hover: "group-hover:bg-yellow-600",
    icon: "text-yellow-200",
  },
  emerald: {
    background: "bg-emerald-500",
    hover: "group-hover:bg-emerald-600",
    icon: "text-emerald-200",
  },
  teal: {
    background: "bg-teal-500",
    hover: "group-hover:bg-teal-600",
    icon: "text-teal-200",
  },
};

export const Link: FC<LinkProps> = ({ href, icon, name, colorScheme }) => {
  const Icon = icon;
  return (
    <a target="_blank" href={href}>
      <div className="w-min p-2.5 border-1 group border-gray-500/40 rounded-xl bg-gray-700/70 bg-clip-padding backdrop-filter backdrop-blur-md transition duration-300 hover:scale-105">
        <div
          className={`w-14 h-14 flex items-center justify-center rounded-2xl transition duration-300 ${colorSchemes[colorScheme].background} ${colorSchemes[colorScheme].hover}`}
        >
          <Icon
            className={`transition duration-300 ${colorSchemes[colorScheme].icon} w-7 h-7`}
          />
        </div>
        <div className="mt-2 h-6 flex items-center justify-center leading-[1.3] text-xs font-semibold text-center">
          {name}
        </div>
      </div>
    </a>
  );
};
