import type { Metadata } from "next";
import { ServicesIndexInner } from "@/components/services-index-inner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three practices, one senior partner each. Fractional HR with Evert Akkerman, workplace mediation with Wendy Akkerman, editorial and communications drawn from 25+ Canadian bylines.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndex() {
  return <ServicesIndexInner />;
}
