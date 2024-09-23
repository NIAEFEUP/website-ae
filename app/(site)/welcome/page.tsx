'use client'

import SectionHeader from "@/components/Common/SectionHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import { VideoGallery } from "./VideoGallery";

export default function WelcomePage(){
    return (
        <>
          {/* <!-- ===== About Start ===== --> */}
            <div className="overflow-hidden pb-6 pt-36 md:pt-24 xl:pb-10 xl:pt-32">
                <SectionHeader headerInfo={{
                    title: "Bem vindos à FEUP",
                    subtitle: "Bem vindos à FEUP",
                    description: `Acabaste de entrar na FEUP e não sabes por onde começar? A AEFEUP está aqui para te ajudar! Nesta página podes encontrar diversas informações sobre alojamento, alimentação, e muito mais.`
                }}
              />
            </div>
          <section className="overflow-hidden pb-20 lg:pb-16 xl:pb-20">
            <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
              <div className="flex items-top gap-8 lg:gap-32.5">
               
                <div className="animate_right">
                  <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: 20,
                      },
    
                      visible: {
                        opacity: 1,
                        x: 0,
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    // className="animate_right md:w-1/2"
                  >
                    <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                        Receção aos Novos Estudantes
                    </h2>
                    <p className="my-2">
                      Para te acolher foi preparado um programa de atividades que inclui uma Sessão de Boas Vindas no Auditório da faculdade, visitas guiadas ao campus da FEUP e sessões de apresentação dos vários cursos.
                    </p>
                    <p className="my-2">
                      Através de uma Mostra de três dias, damos-te ainda a oportunidade de conhecer à chegada um conjunto de atividades extracurriculares da FEUP e da Universidade.
                    </p>
                    <p className="my-2">
                      Teremos ainda um alargado número de outras atividades, pensadas à tua medida, que visam a socialização e, consequentemente, uma melhor integração! Calça as sapatilhas e solta o teu espírito aventureiro numa parede de escalada (numa parceria com o CDUP) e descontrai à hora de almoço no coração verde da Asprela, o Parque da Quinta de Lamas, onde encontrarás várias opções de Street Food e terás a oportunidade de vivenciar o espírito “Comunidade FEUP” à qual, a partir de agora, também pertences!
                    </p>
                    <p className="my-2">
                      Podes consultar aqui todas as informações referentes às atividades que irão acontecer durante a semana de receção. Fica atento às atividades partilhadas  nas redes sociais da AEFEUP e do núcleo do teu curso, para aproveitares todos os momentos para conheceres os teus colegas!
                    </p>
                    <div className= "my-6">
                      <a
                        href="https://www.instagram.com/p/C_6GKhUoA_z/?img_index=1"
                        className="group inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                      >
                        <span className="duration-300 group-hover:pr-2">
                          Programa
                        </span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="currentColor"
                        >
                          <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                        </svg>
                      </a>
                    </div>
    
                  </motion.div>
    
                </div>
              </div>
            </div>
          </section>

          {/* <!-- ===== About Start ===== --> */}
          <section className="overflow-hidden pb-20 lg:pb-16 xl:pb-20">
            <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
              <div className="flex items-top gap-8 lg:gap-32.5">
               
                <div className="animate_right">
                  <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: 20,
                      },
    
                      visible: {
                        opacity: 1,
                        x: 0,
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    // className="animate_right md:w-1/2"
                  >
                    <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                        Vídeos Informativos
                    </h2>
                    <p className="my-2">
                      Para te ajudar com algumas das principais questões de um novo estudante na FEUP, a AEFEUP preparou uma série de vídeos.
                    </p>
                  
                    <VideoGallery/>
    
                  </motion.div>
    
                </div>
              </div>
            </div>
          </section>
          {/* <!-- ===== About End ===== --> */}

          {/* <!-- ===== About Start ===== --> */}
          <section className="overflow-hidden pb-20 lg:pb-16 xl:pb-20">
            <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
              <div className="flex items-top gap-8 lg:gap-32.5">
               
                <div className="animate_right">
                  <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: 20,
                      },
    
                      visible: {
                        opacity: 1,
                        x: 0,
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    // className="animate_right md:w-1/2"
                  >
                    <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                        Mentoria Interpares
                    </h2>
                    <p className="my-2">
                      A Faculdade de Engenharia da Universidade do Porto (FEUP) tem em funcionamento um programa de MENTORIA INTERPARES, destinado aos estudantes que ingressam pela 1ª vez nesta instituição de Ensino Superior (mentorados), tanto nacionais como internacionais, com o objetivo de os apoiar nesta nova fase do seu percurso académico. A dinamização deste programa de integração social e académica é realizada por estudantes (mentores) que já frequentam os diferentes cursos em anos mais avançados, e coordenado por uma equipa de docentes, sendo adaptado a cada curso de acordo com as suas caraterísticas. Este programa é totalmente voluntário tanto para mentores como para mentorados.
                    </p>
                  
                 
                  </motion.div>
    
                </div>
              </div>
            </div>
          </section>
          {/* <!-- ===== About End ===== --> */}

          {/* <!-- ===== About Start ===== --> */}
          <section className="overflow-hidden pb-20 lg:pb-16 xl:pb-20">
            <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
              <div className="flex items-top gap-8 lg:gap-32.5">
               
                <div className="animate_right">
                  <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: 20,
                      },
    
                      visible: {
                        opacity: 1,
                        x: 0,
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    // className="animate_right md:w-1/2"
                  >
                    <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                        Estudantes Internacionais
                    </h2>
                    <p className="my-2">
                      Os Orientation Days visam a receção e acolhimento dos estudantes estrangeiros aquando da sua chegada à Faculdade de Engenharia da Universidade do Porto (FEUP).
                      <br/>
                      Este evento, organizado pela Unidade de Cooperação da FEUP e a AEFEUP no arranque de cada semestre letivo, tem por objetivo saudar os estudantes estrangeiros e facilitar a sua integração na Faculdade e na cidade do Porto. 
                      <br/>
                      Podes consultar aqui todas as informações referentes às atividades que irão acontecer durante a semana de receção. 
                      <br/>
                      Consulta as redes sociais dos @feupbuddies para acompanhares todas as atividades e te integrares na comunidade FEUP! Vê a página deles no sigarra.
                    </p>
                    <p className="my-2">
                      Para esclarecer dúvidas que possam surgir tens aqui os contactos da unidade de cooperação da AEFEUP:
                      <br/>
                      SICC/COOP - Unidade de Cooperação - Sala A215
                      <br/>
                      Horário de Atendimento: 9h30 - 12h45 de 2ª a 5ª feira
                      <br/>
                      Email: incoming@fe.up.pt
                    </p>
                  
                 
                  </motion.div>
    
                </div>
              </div>
            </div>
          </section>
          {/* <!-- ===== About End ===== --> */}
        </>
    )
}

