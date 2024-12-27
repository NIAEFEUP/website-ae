export const sectionsData = [
    {
      id: 1,
      title: "Bem Vindo à FEUP",
      subtitle: "",
      text: (
        <>
          <p>
            Bem-vindo à Comunidade FEUP!
          </p>
          <p>Para te acolher foi preparado um programa de atividades que inclui uma Sessão de Boas Vindas no Auditório da faculdade, visitas guiadas ao campus da FEUP e sessões de apresentação dos vários cursos.</p>
          <p>
            Através de uma Mostra de dois dias poderás ainda conhecer algumas organizações estudantis e projetos da FEUP e da Universidade que podes integrar. O espírito de Comunidade começa exatamente aqui, em fazeres parte ativa das vivências desta Casa que agora também é tua. Um conjunto ainda mais alargado de atividades serão propostas – pensadas à tua medida, que visam a socialização e, consequentemente, uma melhor integração!
          </p>
          <p>
            À hora de almoço integra a nova Comunidade a que pertences e, em pleno coração verde da Asprela – no Parque da Quinta de Lamas -, desfruta de um almoço descontraído com as várias opções de Street Food que te propomos.
          </p>
          <p>
            Podes consultar{" "}
            <a
              href="https://fe.up.pt/novosestudantes/2024/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              aqui
            </a>{" "}
            todas as informações referentes às atividades que irão acontecer durante a semana de receção. Fica atento às atividades partilhadas nas redes sociais da AEFEUP e do núcleo do teu curso, para aproveitares todos os momentos para conheceres os teus colegas!
          </p>
          <p>
            Nesta página poderás encontrar toda a informação necessária para dares os teus primeiros passos na FEUP, tais como informações sobre alojamento, alimentação e diversos outros serviços disponíveis na FEUP.
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "Videos Informativos",
      subtitle: "",
      text: (
        <>
          <p>
            Dá uma vista de olhos nos vídeos, para conheceres a faculdade!            
          </p>
        </>
      ),
    },
    {
      id: 3,
      title: "Programa de Mentoria",
      subtitle: "",
      text: (
        <>
          <p>
          A Faculdade de Engenharia da Universidade do Porto (FEUP) tem em funcionamento um programa de MENTORIA INTERPARES, destinado aos estudantes que ingressam pela 1ª vez nesta instituição de Ensino Superior (mentorados), tanto nacionais como internacionais, com o objetivo de os apoiar nesta nova fase do seu percurso académico. A dinamização deste programa de integração social e académica é realizada por estudantes (mentores) que já frequentam os diferentes cursos em anos mais avançados, e coordenado por uma equipa de docentes, sendo adaptado a cada curso de acordo com as suas caraterísticas. Este programa é totalmente voluntário tanto para mentores como para mentorados.
          </p>
        </>
      ),
      buttons: [
        {
          url: "https://www.up.pt/mentoriaup/inscricoes-para-mentores-as-u-porto-2022-2023/",
          label: "Candidaturas Mentor",
        },
        {
          url: "https://docs.google.com/forms/d/e/1FAIpQLSebJ9eq6allh6dUumsAxKzJM2Yt93kTXNIRjJ-SGhpc-tGo4g/viewform",
          label: "Candidaturas Mentorado",
        },
      ],
    },
    {
        id: 4,
        title: "Estudantes Internacionais",
        subtitle: "",
        text: (
          <>
            <p>
              Os <strong>Orientation Days</strong> têm como objetivo acolher os estudantes estrangeiros na sua chegada à Faculdade de Engenharia da Universidade do Porto (FEUP). Este evento é organizado pela Unidade de Cooperação da FEUP e a AEFEUP no início de cada semestre letivo.
            </p>
            <br />
            <p>
              O programa visa facilitar a tua integração, oferecendo:
            </p>
            <ul className="list-disc ml-5">
              <li>Uma sessão de boas-vindas e apresentação.</li>
              <li>Sessões informativas e práticas sobre a vida na FEUP.</li>
              <li>Um programa cultural, social e académico com diversas atividades.</li>
              <li>Oportunidades para explorar a FEUP, o campus da Asprela e a cidade do Porto.</li>
            </ul>
            <br />
            <p>
              Para mais informações sobre as atividades de receção, consulta a página oficial no Sigarra e segue as redes sociais dos{" "} 
              <a
                href= "https://www.instagram.com/feupbuddies/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"> 
                @feupbuddies
              </a>. 
                Essas plataformas serão fundamentais para acompanhares todas as novidades e atividades.
            </p>
            <br />
            <address className="not-italic">
              <strong>Unidade de Cooperação - Sala A215</strong><br />
              Horário de Atendimento: <em>Segunda a Quinta, 9h30 - 12h45</em><br />
              Email:{" "}
              <a href="mailto:incoming@fe.up.pt" className="text-primary underline">
                incoming@fe.up.pt
              </a>
            </address>
          </>
        ),
      },
  ];
  