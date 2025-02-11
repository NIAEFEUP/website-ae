import { Metadata } from "next";
import { Timeline } from "@/components/ui/timeline";
import SectionHeader from "@/components/Common/SectionHeader";
import { historyTimelineData } from "./historyTimelineData";

export const metadata: Metadata = {
  title: "História e Troféus",
  description: "Descobre a história e os troféus da AEFEUP",
};

const HistoryPage = () => {
  return (
    <section className="pt-20 pb-12 lg:pt-25 xl:pt-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <SectionHeader title="História e Troféus" />

        <p className="text-justify">
          A Associação de Estudantes da Faculdade de Engenharia da Universidade do Porto (AEFEUP) 
          tem uma sólida tradição desportiva, refletida na participação ativa e representação da 
          Faculdade em competições de alto nível. Com uma estrutura que abrange 9 seleções desportivas, 
          a AEFEUP oferece aos seus estudantes a oportunidade de competir em várias modalidades, tanto 
          a nível regional quanto nacional e, sempre que possível, internacional.
        </p>

        <p className="text-justify mt-4">
          Além destas 9 seleções, a AEFEUP destaca-se também no mundo digital com o seu envolvimento 
          nos <span className="text-primary "> eSports</span>, uma área em crescente expansão. 
          Durante o ano, organiza várias atividades desportivas abertas a todos os estudantes, como torneios 
          de <span className="text-primary ">Basquetebol</span>, 
          <span className="text-primary "> Voleibol</span> e 
          <span className="text-primary "> Futsal</span>, além de atividades ao ar livre como 
          <span className="text-primary "> Surf</span> e 
          <span className="text-primary "> Escalada</span>. Estas iniciativas promovem a integração, 
          a saúde e o espírito de equipa dentro da comunidade estudantil da FEUP.
        </p>

        <p className="text-justify mt-4">
          Todos os anos, as seleções da AEFEUP competem com empenho e paixão nos 
          <span className="text-primary "> Campeonatos Académicos do Porto (CAP)</span>, onde têm 
          a oportunidade de mostrar o seu talento e dedicação. O desempenho nos 
          <span className="text-primary "> CAP</span> é o primeiro passo para a qualificação para os 
          <span className="text-primary "> Campeonatos Nacionais Universitários (CNU)</span>, onde as 
          equipas da AEFEUP se têm destacado em diversas modalidades. Esse sucesso contínuo tem permitido à AEFEUP 
          expandir as suas fronteiras competitivas, levando o nome da Faculdade de Engenharia a outros patamares, 
          incluindo competições europeias.
        </p>

        <p className="text-justify mt-4">
          A nível regional, no segundo semestre, realiza-se ainda a competição da 
          <span className="text-primary "> Taça CAP</span>, na qual a AEFEUP tem tido uma presença 
          notável. Além dos desportos tradicionais, a AEFEUP tem investido também no crescente universo dos 
          <span className="text-primary "> eSports</span>, onde várias equipas competem em diferentes 
          títulos como <span className="text-primary "> League of Legends</span>, 
          <span className="text-primary "> Valorant</span>, 
          <span className="text-primary "> Rocket League</span> e 
          <span className="text-primary "> Counter-Strike 2</span>.
        </p>

        <p className="text-justify mt-4">
          A história desportiva da AEFEUP reflete o seu compromisso com a promoção de um estilo de vida saudável, 
          da valorização do espírito de equipa e da busca pela excelência, seja em campo ou no mundo virtual. Ao 
          longo dos anos, as equipas da AEFEUP têm consolidado a sua reputação e continuam a ser uma referência 
          para todos os estudantes da Faculdade de Engenharia, motivando novas gerações a representá-la com orgulho 
          e determinação.
        </p>

        <p className="text-justify mt-4">
          Todos os resultados obtidos ao longo da época são divulgados na 
          <a
            href="https://www.desporto.fap.pt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            {" "}plataforma da FAP
          </a>
          , bem como no 
          <a
            href="https://instagram.com/aefeup"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            {" "}Instagram da AEFEUP
          </a>.
        </p>
      </div>

      <Timeline data={historyTimelineData} />
    </section>
  );
};

export default HistoryPage;
