import { FC } from "react";

interface SectionProps {
  heading: string;
  children?: React.ReactNode;
}

export const Section: FC<SectionProps> = ({ children, heading }) => {
  return (
    <section className="no-scrollbar overflow-y-auto bg-gray-700/70 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md border-2 border-gray-500/20 px-8 pt-6 py-4 w-96 h-96">
      <h2 className="font-semibold text-white text-center text-xl mb-8 mt-2">
        {heading}
      </h2>
      <div className="flex flex-wrap gap-8 mx-auto justify-center">
        {children}
      </div>
    </section>
  );
};
