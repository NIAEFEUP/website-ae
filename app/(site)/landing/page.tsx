import { Metadata } from "next";
import Landing from "@/components/Landing";
import { getPayload } from "payload";
import config from "payload.config";

export const metadata: Metadata = {
  title: "AEFEUP",
  description: "This is AEFEUPS WEBSITE",
  // other metadata
};

const payload = await getPayload({config})
const slidesData = (await payload.find({
  collection: "slide"
})).docs

export default function Home() {
  return (
    <main>
      <Landing slidesData={slidesData}/>
    </main>
  );
}
