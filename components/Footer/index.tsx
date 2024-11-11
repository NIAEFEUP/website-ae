"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
      <div className="mx-auto max-w-[1390px] px-12">
        {/* <!-- Footer Top --> */}
        <div className="flex items-center justify-around flex-wrap m-3 py-10 gap-5">
          <div className="flex flex-col items-center gap-2">
            <a href="https://sigarra.up.pt/feup/pt/web_page.inicial">
              <Image
                width={150}
                height={150}
                src="/images/logo/feup.png"
                alt="Logo"
                className="dark:hidden"
              />
              <Image
                width={150}
                height={150}
                src="/images/logo/feup-white.png"
                alt="Logo"
                className="hidden dark:block"
              />
            </a>
            <a href="/">
              <Image
                width={150}
                height={200}
                src="/images/logo/aefeup.png"
                alt="Logo"
              />
            </a>
          </div>
          <div className="flex w-fit flex-col gap-8 md:flex-row justify-between">
            <div className="flex flex-col justify-center items-start">
              <h4 className="mb-3 text-itemtitle2 font-medium text-black dark:text-white">
                AEFEUP
              </h4>
              <p>Associação de Estudantes da Faculdade de Engenharia da Universidade do Porto</p>
              <p>Rua Doutor Júlio de Matos, 882</p>
              <p>4200–356 Paranhos, Porto</p>
            </div>
            <div className="w-fit">
              <h4 className="mb-3 text-itemtitle2 font-medium text-black dark:text-white">
                Links úteis
              </h4>
              <ul>
                <li>
                  <a
                    href="#"
                    className="mb-3 inline-block hover:text-primary"
                  >
                    Quem somos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="mb-3 inline-block hover:text-primary"
                  >
                    Cedências de Espaço
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="mb-3 inline-block hover:text-primary"
                  >
                    Serviços
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center gap-5">
            <p>Developed and Powered by <a href="https://niafeup.pt" className="hover:text-primary">NIAEFEUP</a></p>
            <a href="https://niaefeup.pt">
              <Image
                width={70}
                height={70}
                src="/images/logo/niaefeup.svg"
                alt="Logo"
                className=""
              />
            </a>
          </div>
        </div>
        {/* <!-- Footer Top --> */}

        {/* <!-- Social Links --> */}
        <div className="flex items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark">
          <div>
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
            >
              <ul className="flex items-center gap-5 w-full">
                <li>
                  <Link href="https://instagram.com/aefeup">
                    <Instagram className="w-6 h-6 dark:text-white" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.facebook.com/aefeup/">
                    <Facebook className="w-6 h-6 dark:text-white" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/channel/UCo6vXzxIaPYguq5Vd6efkyQ">
                    <Youtube className="w-6 h-6 dark:text-white" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/aefeup">
                    <Linkedin className="w-6 h-6 dark:text-white" />
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
        {/* <!-- Footer Bottom --> */}
      </div>
    </footer>

  );
};

export default Footer;
