import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "The HRTO mandatory-mediation rule: what Ontario employers misunderstand — Evert Akkerman in XNL Insights";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function ArticleOG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#FFFFFF",
          position: "relative",
          padding: "80px 96px",
          fontFamily: "system-ui, sans-serif",
          color: "#1A1D24",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "linear-gradient(90deg, #E89B7A 0%, #9690B5 100%)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "16px",
            letterSpacing: "5px",
            textTransform: "uppercase",
            color: "#6B5F7D",
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "999px",
              background: "#E89B7A",
              display: "flex",
            }}
          />
          <span>XNL Insights</span>
          <span style={{ color: "#D1D5DB" }}>·</span>
          <span style={{ color: "#6b6b6b" }}>January 2026</span>
          <div
            style={{
              marginLeft: "12px",
              padding: "4px 10px",
              borderRadius: "999px",
              background: "#E89B7A",
              color: "white",
              fontSize: "12px",
              letterSpacing: "3px",
              fontWeight: 700,
              display: "flex",
            }}
          >
            ORIGINAL
          </div>
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: "68px",
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-2px",
              marginBottom: "32px",
              maxWidth: "1010px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>The HRTO mandatory-mediation rule:</span>
            <span style={{ color: "#C77957" }}>what Ontario employers misunderstand.</span>
          </div>

          <div
            style={{
              fontSize: "24px",
              lineHeight: 1.5,
              color: "#2A2D34",
              maxWidth: "920px",
              marginBottom: "48px",
              display: "flex",
            }}
          >
            Six months in, most employers still treat it as a procedural delay. They are wrong. Three misunderstandings, and what to do now.
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              paddingTop: "28px",
              borderTop: "1px solid #E5E7EB",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "999px",
                background: "linear-gradient(135deg, #2D3D4E 0%, #1F2D3D 100%)",
                color: "white",
                fontSize: "18px",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              EA
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "20px", fontWeight: 700, color: "#1A1D24" }}>
                Evert Akkerman
              </span>
              <span
                style={{
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  color: "#6b6b6b",
                  fontWeight: 600,
                }}
              >
                CHRL · LL.M.
              </span>
            </div>
            <div
              style={{
                marginLeft: "auto",
                fontSize: "18px",
                color: "#6b6b6b",
                fontWeight: 500,
                display: "flex",
              }}
            >
              xnlhr.com
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
