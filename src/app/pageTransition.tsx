"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Keying by pathname causes a lightweight remount, which we use to trigger
  // a subtle fade-in whenever the route changes.
  return (
    <div key={pathname} className="page-fade-in">
      {children}
    </div>
  );
}

