"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScheduleTable from "../Table";

const SecretariaData = [
  { label: 'segunda-feira', value: '10:00–12:30, 14:00–17:30' },
  { label: 'terça-feira', value: '10:00–12:30, 14:00–17:30' },
  { label: 'quarta-feira', value: '10:00–12:30, 14:00–17:30' },
  { label: 'quinta-feira', value: '10:00–12:30, 14:00–17:30' },
  { label: 'sexta-feira', value: '10:00–12:30, 14:00–17:30' },
  { label: 'sábado', value: 'Encerrado' },
  { label: 'domingo', value: 'Encerrado' },
];

const ReprografiaData = [
  { label: 'segunda-feira', value: '09:00–19:00' },
  { label: 'terça-feira', value: '09:00–19:00' },
  { label: 'quarta-feira', value: '09:00–19:00' },
  { label: 'quinta-feira', value: '09:00–19:00' },
  { label: 'sexta-feira', value: '09:00–19:00' },
  { label: 'sábado', value: 'Encerrado' },
  { label: 'domingo', value: 'Encerrado' },
];

const CafetariaData = [
  { label: 'segunda-feira', value: '10:00–19:00' },
  { label: 'terça-feira', value: '10:00–19:00' },
  { label: 'quarta-feira', value: '10:00–19:00' },
  { label: 'quinta-feira', value: '10:00–19:00' },
  { label: 'sexta-feira', value: '10:00–19:00' },
  { label: 'sábado', value: 'Encerrado' },
  { label: 'domingo', value: 'Encerrado' },
];

const Info = () => {
  return (
    <>
      {/* <!-- ===== 1 ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-32.5">
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
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="About"
                className="dark:hidden"
                layout="fill"
                objectFit="contain"
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                layout="fill"
                objectFit="contain"
              />
            </motion.div>
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
              className="animate_right md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg  dark:before:bg-titlebgdark">
                  Secretaria
                </span>
              </h2>
              <div className="mb-8 space-y-4">
                <div>
                  <strong>Telefone:</strong> <span><a href="tel:+351225081556">22 508 1556</a></span>
                </div>
                <div>
                  <strong>Email:</strong> <span><a href="mailto:aefeup@aefeup.pt">aefeup@aefeup.pt</a></span>
                </div>
              </div>
              <ScheduleTable data={SecretariaData} />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== 1 End ===== --> */}

      {/* <!-- ===== 2 ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-32.5">
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
              className="animate_left md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Reprografia
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  Efeitos Gráficos
                </span>
              </h2>
              <div className="mb-8 space-y-4">
                <div>
                  <strong>Telefone:</strong> <span><a href="tel:+351225081556">22 508 1556</a></span>
                </div>
                <div>
                  <strong>Email:</strong> <span><a href="mailto:editorial@aefeup.pt">editorial@aefeup.pt</a></span>
                </div>
              </div>
              <ScheduleTable data={ReprografiaData} />
            </motion.div>
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
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="About"
                className="dark:hidden"
                layout="fill"
                objectFit="contain"
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                layout="fill"
                objectFit="contain"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== 2 End ===== --> */}
      {/* <!-- ===== 3 ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-32.5">
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
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="About"
                className="dark:hidden"
                layout="fill"
                objectFit="contain"
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                layout="fill"
                objectFit="contain"
              />
            </motion.div>
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
              className="animate_right md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-pink-300 dark:before:bg-titlebgdark">
                  Cafetaria
                </span>
              </h2>
              <ScheduleTable data={CafetariaData} />

              <div>
                <a
                  href="#"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Descarregar Ementa
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
      </section>
      {/* <!-- ===== 3 End ===== --> */}

    </>

  );
};

export default Info;
