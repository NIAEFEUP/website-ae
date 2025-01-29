import { Metadata } from "next";
import OpportunitiesClientPage from './client';

export const metadata: Metadata = {
    title: "Oportunidades",
    description: "Voluntariado e Formações – AEFEUP: Ações Sociais, Desenvolvimento Pessoal e Cursos Certificados.",
};

const OpportunitiesPage = async () => {
    return (
        <OpportunitiesClientPage />
    );
}

export default OpportunitiesPage;