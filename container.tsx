import { ReactNode } from "react";

export function Container({
  children,
  className = "",
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "narrow" | "default" | "wide";
}) {
  const max = size === "narrow" ? "max-w-3xl" : size === "wide" ? "max-w-[1440px]" : "max-w-[1280px]";
  return (
    <div className={`${max} mx-auto px-6 md:px-12 lg:px-16 ${className}`}>
      {children}
    </div>
  );
}
