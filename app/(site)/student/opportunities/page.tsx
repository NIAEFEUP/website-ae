import { Metadata } from "next";
import OpportunitiesPageContent from './pageContent';

export const metadata: Metadata = {
    title: "Oportunidades",
    description: "Voluntariado e Formações – AEFEUP: Ações Sociais, Desenvolvimento Pessoal e Cursos Certificados.",
};

const OpportunitiesPage = async () => {
    return (
        <OpportunitiesPageContent />
    );
}

export default OpportunitiesPage;