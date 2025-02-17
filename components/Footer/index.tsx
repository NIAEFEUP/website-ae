"use client";

import Image from "next/image";
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8">
        
        {/* <!-- Footer Top --> */}
        <div className="flex flex-wrap items-center justify-between m-3 py-10 gap-10">
          {/* Logos Section */}
          <div className="relative flex flex-col items-center">
            <a href="/" className="absolute">
              <Image
                width={300}
                height={300}
                src="/images/logo/aefeup.png"
                alt="AEFEUP Logo"
                className=" w-48 sm:w-56 md:w-64 lg:w-72"
              />
            </a>

            <a href="https://sigarra.up.pt/feup/pt/web_page.inicial" className="pt-20 sm:pt-24 md:pt-28 lg:pt-32">
              <Image
                width={300}
                height={300}
                src="/images/logo/feup-white.png"
                alt="FEUP Logo"
                className="hidden dark:block w-48 sm:w-56 md:w-64 lg:w-72"
              />
            </a>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="mb-2 text-itemtitle2 font-medium text-black dark:text-white">
                AEFEUP
              </h4>
              <p>Associação de Estudantes da Faculdade de Engenharia da Universidade do Porto</p>
              <p>Rua Dr. Júlio de Matos 882, 4200-365 Porto</p>
            </div>
            <div>
              <h4 className="mb-2 text-itemtitle2 font-medium text-black dark:text-white">
                Contactos
              </h4>
              <ul>
                <li>
                  <a
                    href="mailto:geral@aefeup.pt"
                    className="mb-2 inline-block hover:text-primary"
                  >
                    geral@aefeup.pt
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+351 225 081 556"
                    className="mb-2 inline-block hover:text-primary"
                  >
                    +351 225 081 556
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <ul className="flex items-center gap-5">
                <li>
                  <Link href="https://instagram.com/aefeup">
                    <Instagram className="w-6 h-6 dark:text-white hover:text-primary transition" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.facebook.com/aefeup/">
                    <Facebook className="w-6 h-6 dark:text-white hover:text-primary transition" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/channel/UCo6vXzxIaPYguq5Vd6efkyQ">
                    <Youtube className="w-6 h-6 dark:text-white hover:text-primary transition" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/aefeup">
                    <Linkedin className="w-6 h-6 dark:text-white hover:text-primary transition" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Footer Top --> */}

        {/* <!-- Sponsors Section --> */}
        <div className="border-t border-stroke py-10 dark:border-strokedark">
          <div className=" ml-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center items-center">
            {[...Array(6)].map((_, index) => (
              <Image
                key={index}
                width={180}
                height={100}
                src={`/images/footer/sponsor${index + 1}.png`}
                alt={`Sponsor ${index + 1}`}
                className="object-contain"
              />
            ))}
          </div>
        </div>

        {/* <!-- Powered by Section --> */}
        <div className="border-t border-stroke py-10 dark:border-strokedark flex flex-col items-center">
          <p className="text-center text-black dark:text-white">
            Powered and Developed by{" "}
            <a href="https://niaefeup.pt" className="hover:text-primary">
              NIAEFEUP
            </a>
          </p>
          <a href="https://niaefeup.pt" className="mt-6">
            <Image
              width={80}
              height={80}
              src="/images/logo/niaefeup.svg"
              alt="NIAEFEUP Logo"
            />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
