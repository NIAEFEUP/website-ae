import { Metadata } from "next";
import LineupsSlider from "./LineupsSlider";

export const metadata: Metadata = {
  title: "Desporto",
  description: "",
};

const SportsPage = async () => {
  return (
    <>
      <section>
        <LineupsSlider />
      </section>
    </>
  );
};

export default SportsPage;
