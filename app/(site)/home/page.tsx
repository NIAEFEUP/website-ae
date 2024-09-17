import { Metadata } from "next";
import Landing from "@/components/Landing";
export const metadata: Metadata = {
  title: "AEFEUP",
  description: "This is AEFEUPS WEBSITE",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Landing/>
    </main>
  );
}
