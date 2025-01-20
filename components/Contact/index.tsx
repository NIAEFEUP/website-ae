"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Contact = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>

          <div className="flex flex-col-reverse flex-wrap justify-center gap-8 md:flex-row md:flex-nowrap">
            <div className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black ">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
              // className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
              >
                <span className="font-medium uppercase text-black dark:text-white">
                  Enviar uma mensagem
                </span>
                <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                  Contactos
                </h2>
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between">
                  <div className="p-2 flex flex-col lg:w-1/2">
                    <label htmlFor="name">Nome</label>
                    <input
                      type="text"
                      id="name"
                      className="p-2 border border-gray-300  bg-transparent rounded  focus:border-[#97321D] focus:outline-none dark:border-gray-600 dark:focus:border-white"
                    />
                  </div>

                  <div className="p-2 flex flex-col lg:w-1/2">
                    <label htmlFor="email">Endereço de Email</label>
                    <input
                      type="email"
                      id="email"
                      className="p-2 border border-gray-300  bg-transparent rounded  focus:border-[#97321D] focus:outline-none dark:border-gray-600 dark:focus:border-white"
                    />
                  </div>
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between">
                  <div className="p-2 flex flex-col lg:w-1/2">
                    <label htmlFor="subject">Assunto</label>
                    <input
                      type="text"
                      id="subject"
                      className="p-2 border border-gray-300 bg-transparent rounded w-full focus:border-[#97321D] focus:outline-none dark:border-gray-600 dark:focus:border-white"
                    />
                  </div>

                  <div className="p-2 flex flex-col lg:w-1/2">
                    <label htmlFor="phone">Número Telemóvel</label>
                    <input
                      type="tel"
                      id="phone"
                      className="p-2 border border-gray-300 bg-transparent rounded  focus:border-[#97321D] focus:outline-none dark:border-gray-600 dark:focus:border-white"
                    />
                  </div>
                </div>

                <form>
                  <div className="mb-11.5 flex flex-col p-2">
                    <label htmlFor="message">Mensagem</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="flex-grow p-2 border border-gray-300  bg-transparent rounded  focus:border-[#97321D] focus:outline-none dark:border-gray-600 dark:focus:border-white"
                    ></textarea>
                  </div>

                  <div className="flex flex-wrap gap-4 xl:justify-between ">
                    <div className="mb-4 flex md:mb-0">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        className="peer sr-only " />
                    </div>
                    <button
                      aria-label="send message"
                      className="inline-flex items-center gap-2.5 rounded-full bg-[#97321D] px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-[#97321D]">
                      Enviar Mensagem
                    </button>
                  </div>
                </form>
              </motion.div>

              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 2, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top w-full md:w-2/5 p-7.5 lg:w-[26%]"
              >
                <div className="5 mb-11">
                  <div className="flex space-x-12">
                    <a href="https://www.instagram.com/aefeup/" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-6 h-6 text-black dark:text-white" />
                    </a>
                    <a href="https://www.facebook.com/aefeup/" target="_blank" rel="noopener noreferrer">
                      <Facebook className="w-6 h-6 text-black dark:text-white" />
                    </a>
                    <a href="https://www.linkedin.com/company/aefeup/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-6 h-6 text-black dark:text-white" />
                    </a>
                  </div>
                </div>

                <div className="5 mb-7">
                  <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                    Endereço de email
                  </h3>
                  <p>
                    <a href="mailto:aefeup@aefeup.pt">geral@aefeup.pt</a>
                  </p>
                </div>
                <div>
                  <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                    Número de telefone
                  </h4>
                  <p>
                    <a href="tel:+35122 508 1556">22 508 1556</a>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
