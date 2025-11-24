import type { ReactNode } from "react";
import NavbarComponent from "./navbar";
import DarkVeil from "../visuals/darkVeil";

interface BaseLayoutProps {
  children: ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Background visual */}
      <DarkVeil />

      {/* Foreground */}
      <div className="relative z-10">
        <NavbarComponent />
      <main className="flex-1 flex flex-col items-center justify-start px-6 pt-32 py-10">
          {children}
        </main>
      </div>
    </div>
  );
}

