import { Metadata } from "next";
import AEFEUPHistoryClientPage from "./client";
import { getPayload } from 'payload'
import config from 'payload.config'

export const metadata: Metadata = {
  title: "History Page",
  description: "This is history Page",
};

//TODO: (thePeras) \n not working
const history_text = `
A Associação de Estudantes da Faculdade de Engenharia da Universidade do Porto (AEFEUP) foi fundada em 15 de Março de 1984 e é a entidade que legalmente representa todos os estudantes da Faculdade de Engenharia da Universidade do Porto. É constituída por quatro órgãos: a Assembleia Geral, a Mesa da Assembleia Geral, a Direção e o Conselho Fiscal. Na Direção estão dispostos os diversos departamentos que promovem e fomentam todas as atividades desportivas, culturais, recreativas, pedagógicas e de responsabilidade social. Contudo, o seu foco é a resolução de todas as questões relacionadas com o ensino e defesa dos estudantes. 
\n A AEFEUP tem se destacado no desenvolvimento de vários projetos e eventos ao longo dos anos, como o “Arraial d’Engenharia” e a feira de emprego “FEUP Engineering Days”, cujo reconhecimento tem aumentado notoriamente. A nível de competições desportivas, tem conquistado títulos a nível nacional e europeu nos últimos anos.
\n A AEFEUP é a maior Associação de Estudantes da Academia do Porto e uma das maiores em Portugal e tem uma sede própria, cujo edifício foi inaugurado a 15 de março de 2009.
`;

const AEFEUPHistoryPage = async () => {

  const presidents = await (await getPayload({ config })).find({
    collection: 'president',
  });

  return <AEFEUPHistoryClientPage history_text={history_text} presidents={presidents.docs} />;
}
export default AEFEUPHistoryPage;
