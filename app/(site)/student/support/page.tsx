import { Metadata } from "next";
import SocialAidClientPage from './client';

export const revalidate = 10
export const dynamicParams = true
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Apoio Social",
  description: "Programas de apoio ao bem-estar e sucesso académico: FAEES, FAS, saúde mental, apoio psicológico e Gabinete de Apoio ao Estudante.",
};

const SocialAidPage = async () => {
  return <SocialAidClientPage />
}

export default SocialAidPage;
