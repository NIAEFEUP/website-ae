"use client";

import SectionHeader from "@/components/Common/SectionHeader";
import { motion } from "framer-motion";
import Image from "next/image";

export default function EventsPage(){
    return (
        <>
          {/* <!-- ===== About Start ===== --> */}
            <div className="overflow-hidden pb-8 pt-36 md:pt-24 xl:pb-24 xl:pt-32">
                <SectionHeader headerInfo={{
                    title: "Eventos",
                    subtitle: "Conhece os nossos eventos",
                    description: `A AEFEUP organiza diversos eventos ao longo do ano letivo, com o objetivo de promover a integração dos estudantes e proporcionar momentos de convívio e diversão.`
                }}
              />
            </div>
          <section className="overflow-hidden pb-20 lg:pb-16 xl:pb-20">
            <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
              <div className="flex items-top gap-8 lg:gap-32.5">
                <div className="animate_left relative mx-auto hidden aspect-[3/2] md:block md:w-1/2">
                  <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: -20,
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
                    // className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
                  >
                    <Image
                      src="/images/events/fed/fed.webp"
                      alt="FED"
                      fill
                      priority
                    />
                  </motion.div>
                </div>
                <div className="animate_right md:w-1/2">
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
                    <span className="font-medium uppercase text-black dark:text-white">
                        Feira de Emprego
                    </span>
                    <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                        FEUP Engineering Days
                    </h2>
                    <p>
                        Os FEUP Engineering Days é um evento de empregabilidade e inovação que visa despertar uma visão empreendedora nos mais de 9000 estudantes da FEUP, através do contacto direto com o meio empresarial.
                        <br/>
                        Os FEUP Engineering Days irão contar com a habitual presença de mais de 30 empresas por dia no corredor principal da FEUP onde poderão então cativar os estudantes e demonstrar aquela que é a sua área de atuação. Além disso, contará também com a realização de diversas palestras e workshops.
                    </p>
                    <div className= "my-6">
                      <a
                        href="#"
                        className="group inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                      >
                        <span className="duration-300 group-hover:pr-2">
                          Inscrições
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
          {/* <!-- ===== About End ===== --> */}
    
          {/* <!-- ===== About Two Start ===== --> */}
          <section className="pb-36 md:pb-24 xl:pb-32">
            <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
              <div className="flex items-center gap-8 lg:gap-32.5">
                <div className="animate_left md:w-1/2">
                  <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: -20,
                      },
    
                      visible: {
                        opacity: 1,
                        x: 0,
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1, delay: 0.1 }}
                    viewport={{ once: true }}
                    // className="animate_left md:w-1/2"
                  >
                    <h4 className="font-medium uppercase text-black dark:text-white">
                        Festa de Receção
                    </h4>
                    <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                        Arraial D'Engenharia
                    </h2>
                    <p>
                        O Arraial d’Engenharia é um dos eventos mais esperados da
                        Associação de Estudantes da Faculdade de Engenharia da Universidade
                        do Porto (FEUP).
                        <br/>
                        Esta festa anual reúne estudantes, professores, funcionários e a comunidade
                        num ambiente festivo e animado.
                        <br/>
                        Para facilitar a participação, a AEFEUP disponibiliza transportes gratuitos
                        a partir de pontos estratégicos. Os bilhetes estão disponíveis tanto em formato
                        de passe geral como diário.
                        <br/>
                        O Arraial d’Engenharia é uma celebração da vida académica, promovendo a
                        integração e a diversão entre todos os presentes.
                    </p>
                    <div className= "my-6">
                      <a
                        href="#"
                        className="group inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                      >
                        <span className="duration-300 group-hover:pr-2">
                          Bilhetes
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
                <div className="animate_right relative mx-auto hidden aspect-[3/2] md:block md:w-1/2">
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
                    transition={{ duration: 1, delay: 0.1 }}
                    viewport={{ once: true }}
                    // className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
                  >
                    <Image
                      src="/images/events/arraial/arraial.webp"
                      alt="Arraial"
                      fill
                      priority
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- ===== About Two End ===== --> */}
        </>
    )
}

