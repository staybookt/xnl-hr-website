import type { Metadata } from "next";
import { ServicesIndexInner } from "@/components/services-index-inner";

export const metadata: Metadata = {
  title: "Services · Fractional HR + Editorial · XNL HR & Communications",
  description:
    "Two practices, one senior partner each. Fractional HR and editorial for owner-operated Canadian businesses and not-for-profits. Project-priced or capped hourly. No retainers required. Founded 2012 by Evert Akkerman (CHRL, LL.M.).",
  alternates: { canonical: "/services" },
};

export default function ServicesIndex() {
  return <ServicesIndexInner />;
}
