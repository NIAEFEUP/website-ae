"use client";

import SectionHeader from "@/components/Common/SectionHeader";
import { Feature } from "@/types/feature";
import LearnMore from "@/components/LearnMore";
import { Video } from "@/payload-types";
import ReactPlayer from 'react-player/lazy'
import Link from "next/link";

interface Props {
  videos: Video[];
}

const WelcomeClientPage = ({ videos }: Props) => {
  return (
    <>
      {/* <!-- Bem Vindo à FEUP --> */}
      <section className="overflow-hidden pb-20 pt-25 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `Bem Vindo à FEUP`,
                subtitle: ``,
                description: `Mensagem do Presidente`,
              }}
            />
            {/* <!-- Mensagem do Presidente aqui --> */}
          </div>
          <p>Bem-vindo à Comunidade FEUP!</p>
          <p>Para te acolher foi preparado um programa de atividades que inclui uma Sessão de Boas Vindas no Auditório da faculdade, visitas guiadas ao campus da FEUP e sessões de apresentação dos vários cursos.</p>
          <p>Através de uma Mostra de dois dias poderás ainda conhecer algumas organizações estudantis e projetos da FEUP e da Universidade que podes integrar. O espírito de Comunidade começa exatamente aqui, em fazeres parte ativa das vivências desta Casa que agora também é tua. Um conjunto ainda mais alargado de atividades serão propostas – pensadas à tua medida, que visam a socialização e, consequentemente, uma melhor integração!</p>
          <p>À hora de almoço integra a nova Comunidade a que pertences e, em pleno coração verde da Asprela – no Parque da Quinta de Lamas -, desfruta de um almoço descontraído com as várias opções de Street Food que te propomos.</p>
          <p>Podes consultar <a href="https://fe.up.pt/novosestudantes/2024/">aqui</a> todas as informações referentes às atividades que irão acontecer durante a semana de receção. Fica atento às atividades partilhadas  nas redes sociais da AEFEUP e do núcleo do teu curso, para aproveitares todos os momentos para conheceres os teus colegas!</p>
          <p>Nesta página poderás encontrar toda a informação necessária para dares os teus primeiros passos na FEUP, tais como informações sobre alojamento, alimentação e diversos outros serviços disponíveis na FEUP.</p>
        </div>
      </section>

      {/* <!-- Videos Informativos --> */}
      <section className="overflow-hidden pb-20 pt-25 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `Videos Informativos`,
                subtitle: ``,
                description: ``,
              }}
            />
          </div>
        </div>
        <div className="flex gap-5 justify-center mt-10">
          {/* TODO: Add animation to delay in each animation */}
          {videos.map((video) => (
            video.url && (
              <div key={video.id}>
                <video src={video.url} controls width={300} />
                <h2 className="text-center mt-5 text-xl">{video.título}</h2> {/* TODO: Change to tittle */}
              </div>
            )))}
        </div>

      </section >

      {/* <!-- Programa de Mentoria --> */}
      <section className="overflow-hidden pb-20 pt-25 lg:pb-25 xl:pb-30" >
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `Programa de Mentoria`,
                subtitle: ``,
                description: ``,
              }}
            />
          </div>
        </div>
        {/* TODO: paragraph component */}
        <p>
          A Faculdade de Engenharia da Universidade do Porto (FEUP) tem em funcionamento um programa de MENTORIA INTERPARES, destinado aos estudantes que ingressam pela 1ª vez nesta instituição de Ensino Superior (mentorados), tanto nacionais como internacionais, com o objetivo de os apoiar nesta nova fase do seu percurso académico. A dinamização deste programa de integração social e académica é realizada por estudantes (mentores) que já frequentam os diferentes cursos em anos mais avançados, e coordenado por uma equipa de docentes, sendo adaptado a cada curso de acordo com as suas caraterísticas. Este programa é totalmente voluntário tanto para mentores como para mentorados.
        </p>
        <div className="flex gap-5">

          {/* TODO: Link component */}
          <Link href="https://www.up.pt/mentoriaup/inscricoes-para-mentores-as-u-porto-2022-2023/">Candidaturas Mentor</Link>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSebJ9eq6allh6dUumsAxKzJM2Yt93kTXNIRjJ-SGhpc-tGo4g/viewform">Candidaturas Mentorado</Link>
        </div>
      </section>

      {/* <!-- EStudantes Internacionais --> */}
      <section className="overflow-hidden pb-20 pt-25 lg:pb-25 xl:pb-30" >
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `Estudantes Internacionais`,
                subtitle: ``,
                description: ``,
              }}
            />
          </div>
        </div>
        <p>
          Os Orientation Days visam a receção e acolhimento dos estudantes estrangeiros aquando da sua chegada à Faculdade de Engenharia da Universidade do Porto (FEUP). Este evento, organizado pela Unidade de Cooperação da FEUP e a AEFEUP no arranque de cada semestre letivo, tem por objetivo saudar os estudantes estrangeiros e facilitar a sua integração na Faculdade e na cidade do Porto.

          O programa do evento inclui uma sessão de receção e boas-vindas, diversas sessões informativas e de caráter prático, um programa cultural, social e académico que se desdobra por vários dias e que permite aos estudantes estrangeiros conhecerem de forma detalhada a FEUP, o campus da Asprela e também a própria cidade do Porto.

          Podes consultar aqui todas as informações referentes às atividades que irão acontecer durante a semana de receção.
          Consulta as redes sociais dos @feupbuddies para acompanhares todas as atividades e te integrares na comunidade FEUP! Vê a página deles no sigarra.

          Para esclarecer dúvidas que possam surgir tens aqui os contactos da unidade de cooperação da AEFEUP:
          SICC/COOP - Unidade de Cooperação - Sala A215
          Horário de Atendimento: 9h30 - 12h45 de 2ª a 5ª feira
          Email: incoming@fe.up.pt

        </p>
      </section>

    </>
  );
};

export default WelcomeClientPage;
