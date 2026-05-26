import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "XNL HR & Communications — Senior HR judgment, scoped by the project.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #1A1D24 0%, #2D3D4E 45%, #6B5F7D 100%)",
          position: "relative",
          padding: "84px 96px",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-220px",
            right: "-180px",
            width: "780px",
            height: "780px",
            background:
              "radial-gradient(circle, rgba(232, 155, 122, 0.55) 0%, transparent 65%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-220px",
            left: "-180px",
            width: "640px",
            height: "640px",
            background:
              "radial-gradient(circle, rgba(150, 144, 181, 0.35) 0%, transparent 65%)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            fontSize: "18px",
            letterSpacing: "5px",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.6)",
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "999px",
              background: "#E89B7A",
              display: "flex",
            }}
          />
          <span>XNL HR &amp; Communications</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
          }}
        >
          <div
            style={{
              fontSize: "92px",
              lineHeight: 1.02,
              fontWeight: 700,
              letterSpacing: "-3px",
              marginBottom: "36px",
              maxWidth: "980px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>The outsourced</span>
            <span>HR department.</span>
          </div>
          <div
            style={{
              fontSize: "30px",
              lineHeight: 1.35,
              color: "rgba(255,255,255,0.78)",
              maxWidth: "880px",
              display: "flex",
            }}
          >
            Senior HR judgment, scoped by the project. Fractional HR · Workplace Mediation · Editorial.
          </div>

          <div
            style={{
              marginTop: "56px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              fontSize: "20px",
              color: "rgba(255,255,255,0.65)",
              fontWeight: 500,
            }}
          >
            <span>xnlhr.com</span>
            <span style={{ color: "#E89B7A" }}>·</span>
            <span>Newmarket, ON · Canada-wide</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
