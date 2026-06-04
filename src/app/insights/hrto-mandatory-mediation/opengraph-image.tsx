import { ImageResponse } from "next/og";

// The /insights/hrto-mandatory-mediation page now 301-redirects to /insights
// (the original article was a draft Evert didn't write). This OG generator is kept
// because Next.js requires a default export from this file convention, but it now
// returns a minimal generic XNL card. Anyone hitting the redirect URL never sees
// this image — they're sent straight to /insights before metadata is fetched.

export const runtime = "edge";
export const alt = "XNL HR & Communications";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1A1D24",
          color: "white",
          fontSize: "64px",
          fontWeight: 600,
          letterSpacing: "-2px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        XNL HR &amp; Communications
      </div>
    ),
    { ...size }
  );
}
