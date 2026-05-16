"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navigation } from "@/components/common/Navigation";
import { CookieBanner } from "@/components/common/CookieBanner";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { BookingProvider, useBooking } from "@/components/common/BookingContext";
import { BookingModal } from "@/components/common/BookingModal";

function LayoutContent({ children }: { children: ReactNode }) {
  const { isOpen, closeBooking } = useBooking();
  const pathname = usePathname();
  const isLanding = pathname === "/";

  return (
    <>
      <Link className="skip-link" href="#main-content">
        Saltar al contenido
      </Link>
      <Navigation />
      <main id="main-content" className={`flex-1 ${isLanding ? "landing" : ""}`}>
        {isLanding ? children : <div key={pathname}>{children}</div>}
      </main>
      <div id="fabStack" className="fab-stack">
        <ScrollToTop />
        <WhatsAppButton />
      </div>
      <BookingModal isOpen={isOpen} onClose={closeBooking} />
      <CookieBanner />
    </>
  );
}

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <BookingProvider>
      <LayoutContent>{children}</LayoutContent>
    </BookingProvider>
  );
}
