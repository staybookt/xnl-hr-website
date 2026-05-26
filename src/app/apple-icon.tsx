import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          fontSize: 116,
          fontWeight: 800,
          letterSpacing: "-7px",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <span>X</span>
        <span
          style={{
            position: "absolute",
            bottom: 36,
            right: 34,
            width: 28,
            height: 28,
            borderRadius: 999,
            background: "#E89B7A",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
