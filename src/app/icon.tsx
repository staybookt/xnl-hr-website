import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 20,
          fontWeight: 800,
          letterSpacing: "-1.5px",
          position: "relative",
          borderRadius: 7,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <span>X</span>
        <span
          style={{
            position: "absolute",
            bottom: 6,
            right: 6,
            width: 5,
            height: 5,
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
