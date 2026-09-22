"use client";

import { useEffect, useState } from "react";

export function CurrentDate() {
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, []);

  return <span>{date}</span>;
}
