"use client"

import SectionHeader from "@/components/Common/SectionHeader";
import { ArtistVideo} from "@/payload-types";
import Text from "@/components/Text";
import { Instagram } from "lucide-react";
import InstagramCarouselSection from "@/components/InstagramCarouselSection";

interface Props {
  artistsVideos: ArtistVideo[];
}
const ArraialClientPage = ({ artistsVideos }: Props) => {
  return (
    <main className="py-20 lg:py-25 xl:py-30">
      <SectionHeader
        title="Arraial D'Engenharia 2025"
        subtitle={`29, 30 e 31 outubro\nExponor`}
      />

      {/* centered Instagram */}
      <div className="flex justify-center">
        <a
          href="https://www.instagram.com/arraialdengenharia/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Arraial D'Engenharia"
          className="inline-flex items-center justify-center rounded-full w-10 h-10"
        >
          <Instagram className="w-6 h-6 hover:text-black" />
        </a>
      </div>

      <Text sections={[
        {
          id: 1,
          text: [
            <p key={1}>
              A maior festa de rececção aos novos estudantes está quase a começar, e tu não vais querer perder! Compra já os teus bilhetes no site da BOL ou na secretaria da AEFEUP: <a
                href="https://aefeup.bol.pt/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                aefeup.bol.pt
              </a>  </p>,
            <p key={2}>
              E não te esqueças de trocar o teu passe por pulseira na secretaria da AEFEUP!
            </p>
          ]
        }
      ]} />

      <InstagramCarouselSection
        informativeVideos={artistsVideos}
        title="Artistas"
      />

    </main>
  );
}
export default ArraialClientPage;
