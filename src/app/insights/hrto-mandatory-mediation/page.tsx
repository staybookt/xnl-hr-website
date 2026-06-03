import { permanentRedirect } from "next/navigation";

export default function HRTORedirect() {
  permanentRedirect("/insights");
}
