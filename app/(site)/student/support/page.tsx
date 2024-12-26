import { Metadata } from "next";
import SocialAidPageContent from './pageContent';

export const metadata: Metadata = {
  title: "Apoio Social",
  description: "Programas de apoio ao bem-estar e sucesso académico: FAEES, FAS, saúde mental, apoio psicológico e Gabinete de Apoio ao Estudante.",
};

const SocialAidPage = async () => {
  return (
    <SocialAidPageContent/>
  );
}

export default SocialAidPage;