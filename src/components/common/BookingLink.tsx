"use client";

import { CSSProperties, ReactNode } from "react";
import { BOOKING_URL } from "@/lib/constants/site";
import { useBooking } from "./BookingContext";

export function BookingLink({
  className,
  children,
  onClick,
  style,
}: {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
}) {
  const { openBooking } = useBooking();

  return (
    <a
      href={BOOKING_URL}
      className={className}
      style={style}
      onClick={(e) => {
        e.preventDefault();
        openBooking();
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}
