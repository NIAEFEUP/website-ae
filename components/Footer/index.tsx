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
          <div className="flex flex-col sm:flex-row xl:flex-col items-center gap-2">
            <a href="https://sigarra.up.pt/feup/pt/web_page.inicial">
              <img
                width={150}
                height={150}
                src="/images/logo/feup.png"
                alt="Logo"
                className="dark:hidden"
              />
              <img
                width={150}
                height={150}
                src="/images/logo/feup-white.png"
                alt="Logo"
                className="hidden dark:block"
              />
            </a>
            <a href="/">
              <img
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
              <p>Rua Dr. Júlio de Matos 882, 4200-365 Porto</p>
            </div>
            <div className="w-fit">
              <h4 className="mb-3 text-itemtitle2 font-medium text-black dark:text-white">
                Contactos
              </h4>
              <ul>

                <li>
                  <a
                    href="mailto:geral@aefeup.pt"
                    className="mb-3 inline-block hover:text-primary"
                  >
                    geral@aefeup.pt
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+351 225 081 556"
                    className="mb-3 inline-block hover:text-primary"
                  >
                    +351 225 081 556
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center gap-5">
            <p>Developed and Powered by <a href="https://niaefeup.pt" className="hover:text-primary">NIAEFEUP</a></p>
            <a href="https://niaefeup.pt">
              <img
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
