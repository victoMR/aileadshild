"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Navigation } from "@/components/common/Navigation";
import { CookieBanner } from "@/components/common/CookieBanner";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { BookingProvider, useBooking } from "@/components/common/BookingContext";
import { BookingDrawer } from "@/components/common/BookingDrawer";

function LayoutContent({ children }: { children: ReactNode }) {
  const { isOpen, closeBooking } = useBooking();
  const pathname = usePathname();

  return (
    <>
      <Navigation />
      <main className="flex-1">
        <div key={pathname} className="animate-fade-up">
          {children}
        </div>
      </main>
      <WhatsAppButton />
      <ScrollToTop />
      <BookingDrawer isOpen={isOpen} onClose={closeBooking} />
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
